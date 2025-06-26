<template>
    <div class="page-wrapper">
        <NuxtLinkLocale :to="{ name: 'schedule-day', params: { day: $route.params.day } }" class="back-button">
            <IconBackArrow width="16" height="10" />
            {{ t('Retour à la programmation') }}
        </NuxtLinkLocale>
        <div class="session-wrapper">
            <div class="session-header">
                <span class="session-date">{{ formatDate(data.date) }}</span>
                <span class="session-time">{{
                    t('{start} à {end}', {
                        start: formatSessionTime(data.beginsAt),
                        end: formatSessionTime(data.endsAt),
                    })
                }}</span>
            </div>
            <h1 class="session-title">{{ data.title }}</h1>
            <div v-html="data.htmlDescription"></div>
            <p class="session-place">{{ data.place }}</p>
            <ScheduleSessionCategories :list-id="data.id" :categories="data.categories" />
            <ul class="speakers-list">
                <li v-for="speaker in data.speakers" :key="speaker.id">
                    <div class="speaker-wrapper">
                        <div class="speaker-photo">
                            <img v-if="speaker.photoUrl" width="128" height="128" :src="speaker.photoUrl" alt="" />
                            <img
                                v-else
                                width="128"
                                height="128"
                                :src="`https://ui-avatars.com/api/?name=${speaker.firstName}+${speaker.lastName}&background=e2d5c6&color=593e35&bold=true&format=svg`"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 class="speaker-name">{{ speaker.firstName }} {{ speaker.lastName }}</h2>
                            <p v-if="speaker.jobTitle || speaker.organization" class="speaker-infos">
                                <span v-if="speaker.jobTitle">{{ speaker.jobTitle }}</span>
                                <span v-if="speaker.jobTitle && speaker.organization">, </span>
                                <span v-if="speaker.organization">{{ speaker.organization }}</span>
                            </p>
                            <p v-if="speaker.biography" class="speaker-biography">{{ speaker.biography }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import IconBackArrow from '@/assets/svg/back-arrow.svg?component';

defineI18nRoute({
    paths: {
        fr: '/programmation/[day]/conference/[id]',
        en: '/schedule/[day]/session/[id]',
    },
});

const { formatSessionTime } = useTimeFormatter();
const { t, locale } = useI18n();
const { $luxon } = useNuxtApp();
const route = useRoute();
const sessionId = route.params.id.split('-').pop();

const { data } = await useAsyncData(`schedule-${sessionId}-${locale.value}`, async () => {
    const { data, suspense } = useSession(sessionId);
    await suspense();
    return data.value;
});

const seoTitle = computed(() => data.value?.title || '');
const seoDescription = computed(() => {
    const fullDescription = data.value?.description || '';
    if (fullDescription.length <= 150) return fullDescription;
    const sentences = fullDescription.match(/[^.!?]+[.!?]+/g) || [fullDescription];
    let result = '';
    for (const sentence of sentences) {
        if ((result + sentence).length > 150) break;
        result += sentence;
    }
    return result.trim();
});
const seoOgImage = computed(() => data.value?.bannerUrl || data.value?.speakers?.[0]?.photoUrl || undefined);

useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogImage: seoOgImage,
});

function formatDate(date) {
    const formattedDate = $luxon.DateTime.fromISO(date).toLocaleString({
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });
    return formattedDate;
}
</script>

<style lang="postcss" scoped>
.page-wrapper {
    margin: 0 auto;
    flex-direction: column;
    max-width: var(--page-container-max-width);
    padding: 40px 16px 80px;
}
.back-button {
    display: flex;
    align-items: center;
    gap: 8px;
    text-transform: lowercase;
    font-weight: 600;
    font-size: rem(14px);
    margin-bottom: 40px;
    color: var(--gray-900);
    text-decoration: none;
    &:hover,
    &:focus-visible {
        svg {
            transform: translateX(-4px);
        }
    }
    svg {
        transition: transform var(--hover-transition);
    }
}
.session-wrapper {
    border: 1px solid var(--gray-500);
    border-radius: 8px;
    max-width: 875px;
    padding: 32px 16px;
    @media (--md) {
        padding: 40px;
    }
    @media (--lg) {
        padding: 10%;
    }
}
.session-header {
    display: flex;
    gap: 24px;
    font-weight: 600;
    margin-bottom: 24px;
}
.session-title {
    font-size: rem(24px);
    font-weight: 600;
    @media (--lg) {
        font-size: rem(30px);
    }
}
.session-place {
    font-weight: 600;
    margin: 24px 0;
}
.speakers-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    margin: 48px 0 0;
    padding: 0;
}
.speaker-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (--lg) {
        flex-direction: row;
    }
}
.speaker-photo {
    width: 128px;
    height: 128px;
    background: var(--beige-200);
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
}
.speaker-name {
    font-size: rem(18px);
    font-weight: 600;
    margin: 0;
}
.speaker-infos {
    font-weight: 600;
}
</style>

<i18n lang="json">
{
    "en": {
        "Retour à la programmation": "Go back to schedule",
        "{start} à {end}": "{start} to {end}"
    }
}
</i18n>
