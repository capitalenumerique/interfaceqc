<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
        <div class="page-container">
            <div class="schedule-grid">
                <UpcomingSchedule v-if="!scheduleEnabled" />
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
            </div>
        </div>
    </div>
</template>

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
});

// FIXME: https://github.com/nuxt/nuxt/issues/31638
onMounted(() => {
    window.scrollTo(0, 0);
});

const scheduleEnabled = ref(true);
const prismic = usePrismic();
const route = useRoute();
const localePath = useLocalePath();
const getRouteBaseName = useRouteBaseName();

const { locale } = useI18n();
const { $luxon } = useNuxtApp();

// redirect to day 1 when schedule is enabled
if (scheduleEnabled.value && getRouteBaseName(route.name!) !== 'schedule-day') {
    await navigateTo(localePath({ name: 'schedule-day', params: { day: 1 } }));
}

const { data: response } = await useAsyncData(`schedule-${locale.value}`, async () => {
    const { data, suspense } = useSchedule();
    const [page] = await Promise.all([prismic.client.getSingle('program', { lang: `${locale.value}-ca` }), suspense()]);
    return { page: ref(page), data: ref(data.value) };
});

const { page, data } = response.value ?? {};

useSeoMeta({
    title: page?.value?.data.meta_title,
    description: page?.value?.data.meta_description,
});

const dates = computed(() => {
    if (!data?.value) return [];
    return data.value.map((entry) => {
        const formattedDate = $luxon.DateTime.fromISO(entry.date).toLocaleString({
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        });
        return formattedDate;
    });
});
</script>

<style lang="postcss" scoped>
.page-container {
    max-width: var(--page-container-max-width);
    margin: 64px auto;
    padding: 0 16px;
    @media (--md) {
        padding: 0 32px;
    }
}
.date-tabs {
    display: inline-flex;
    gap: 8px;
    border: 1px solid var(--gray-900);
    border-radius: 8px;
    padding: 8px;
    margin: 0 0 64px;
    list-style: none;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    @media (--md) {
        width: auto;
        max-width: none;
    }
}
.date-tab {
    display: block;
    text-decoration: none;
    font-size: rem(12px);
    line-height: 1.25;
    font-weight: 600;
    color: var(--gray-900);
    background-color: transparent;
    border-radius: 6px;
    padding: 8px;
    line-height: 1.5;
    cursor: pointer;
    border: 2px dashed transparent;
    text-wrap: balance;
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition),
        border-style var(--hover-transition),
        border-color var(--hover-transition);
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
        border-color: var(--gray-900);
        border-style: dashed;
    }
    &.router-link-exact-active {
        background-color: var(--gray-900);
        color: var(--beige-100);
        border-color: var(--gray-900);
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
