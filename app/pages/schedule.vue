<script lang="ts" setup>
import { components } from '~/slices';
import { NuxtLinkLocale } from '#components';

definePageMeta({
    i18n: {
        paths: {
            fr: '/programmation',
            en: '/schedule',
        },
    },
    // redirect to day 1 when schedule is enabled; runs on every navigation, unlike setup
    // which is skipped when coming back from a child page (e.g. /programmation/1 → /programmation)
    middleware: (to) => {
        if (useRouteBaseName()(to) === 'schedule' && useNuxtApp().$luxon.DateTime.now() >= SCHEDULE_RELEASE_DATE) {
            return navigateTo({ path: `${to.path.replace(/\/$/, '')}/1`, query: to.query });
        }
    },
});

const { $luxon } = useNuxtApp();
let scheduleInterval: ReturnType<typeof setInterval>;

const scheduleEnabled = ref($luxon.DateTime.now() >= SCHEDULE_RELEASE_DATE);

onMounted(() => {
    // FIXME: https://github.com/nuxt/nuxt/issues/31638
    window.scrollTo(0, 0);
    scheduleInterval = setInterval(() => {
        if ($luxon.DateTime.now() >= SCHEDULE_RELEASE_DATE) {
            scheduleEnabled.value = true;
            clearInterval(scheduleInterval);
        }
    }, 1000);
});
onUnmounted(() => clearInterval(scheduleInterval));

const prismic = usePrismic();
const localePath = useLocalePath();

const { t, locale } = useI18n();

function onCountdownDone() {
    scheduleEnabled.value = true;
    navigateTo(localePath({ name: 'schedule-day', params: { day: 1 } }));
}

const { data: response, error } = await useAsyncData(`schedule-${locale.value}`, async () => {
    const { data, suspense } = useSchedule();
    const [page] = await Promise.all([prismic.client.getSingle('program', { lang: `${locale.value}-ca` }), suspense()]);
    return { page: page, data: data.value };
});

const { page, data } = response.value ?? {};

useSeoMeta({
    title: page?.data.meta_title,
    description: page?.data.meta_description || undefined,
});

const dates = computed(() => {
    if (!data) return [];
    return data.map((entry) => {
        const formattedDate = $luxon.DateTime.fromISO(entry.date).toLocaleString({
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        });
        return formattedDate;
    });
});
</script>

<template>
    <div>
        <div class="schedule-slice-zone">
            <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
        </div>
        <div class="page-container">
            <div class="schedule-grid">
                <!-- <UpcomingSchedule v-if="!scheduleEnabled" /> -->
                <ClientOnly v-if="!scheduleEnabled">
                    <ScheduleCountdown :release-date="SCHEDULE_RELEASE_DATE" @done="onCountdownDone" />
                </ClientOnly>
                <template v-else-if="dates.length">
                    <ul class="date-tabs">
                        <li v-for="(date, i) in dates" :key="`date-${i}`">
                            <NuxtLinkLocale class="date-tab" :to="{ name: 'schedule-day', params: { day: i + 1 } }">
                                {{ date }}
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                    <NuxtPage :data="data" />
                </template>
                <p v-else-if="error">
                    {{ t('La programmation est présentement indisponible, veuillez réessayer plus tard.') }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.schedule-slice-zone {
    :deep(.page-header) {
        margin-inline: 0;
        @media (--xxl) {
            padding: 0 48px;
        }
    }
}
.page-container {
    margin: 64px auto;
    padding: 0 16px;
    @media (--md) {
        padding: 0 32px;
    }
    @media (--xxl) {
        padding: 0 48px;
    }
}
.date-tabs {
    display: inline-flex;
    gap: 8px;
    border-radius: 8px;
    padding: 8px;
    margin: 0 0 64px;
    list-style: none;
    justify-content: space-between;
    background-color: var(--color-white);
}
.date-tab {
    display: block;
    text-decoration: none;
    font-size: rem(12px);
    line-height: 1.25;
    font-weight: 500;
    color: var(--gray-900);
    background-color: transparent;
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;
    text-wrap: balance;
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition);
    @media (--md) {
        font-size: rem(14px);
    }
    @media (--lg) {
        font-size: rem(16px);
        padding: 10px 12px;
    }
    &:hover,
    &:focus-visible {
        background-color: var(--beige-100);
        color: var(--gray-900);
    }
    &.router-link-exact-active {
        background-color: var(--gray-900);
        color: var(--beige-100);
    }
}
.schedule-grid {
    margin-bottom: 64px;
}
</style>

<i18n lang="json">
{
    "en": {
        "La programmation est présentement indisponible, veuillez réessayer plus tard.": "The schedule is currently unavailable. Please try again later."
    }
}
</i18n>
