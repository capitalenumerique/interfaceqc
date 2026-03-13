<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HomeHeaderSlice>(['slice', 'index', 'slices', 'context']));

const { t, locale, localeProperties } = useI18n();
const afterEvent = ref(false);
</script>

<template>
    <section class="home-header">
        <ClientOnly>
            <HeroPuzzle />
            <template #placeholder>
                <div class="placeholder"></div>
            </template>
        </ClientOnly>
        <div class="event-infos-wrapper">
            <div v-if="!afterEvent" class="event-infos infos-top">
                <h2 class="infos-title">{{ slice.primary.title }}</h2>
                <p class="infos-text">{{ slice.primary.description }}</p>
                <PrimaryButton :to="$config.public.ticketing_url" target="_blank">
                    {{ t('Participer') }}
                </PrimaryButton>
            </div>
            <div v-else class="event-infos infos-bottom">
                <h2 class="infos-title">{{ t('Télécharge l’application SwapCard') }}</h2>
                <p class="infos-text">
                    {{ t('Si tu as manqué des conférences à l’édition 2026, les rediffusions sont en cours.') }}
                </p>
                <div class="infos-links">
                    <a
                        :href="`https://apps.apple.com/ca/app/swapcard-smart-event-app/id879488719?l=${localeProperties.language}`"
                        target="_blank"
                    >
                        <img
                            :src="`/app-store-${locale}.svg`"
                            :alt="t('Télécharger Swapcard sur l’App Store')"
                            width="168"
                            height="56"
                        />
                    </a>
                    <a
                        :href="`https://play.google.com/store/apps/details?id=com.swapcard.apps.android&pcampaignid=web_share&hl=${localeProperties.language}`"
                        target="_blank"
                    >
                        <img
                            :src="`/google-play-${locale}.svg`"
                            :alt="t('Télécharger Swapcard sur Google Play')"
                            width="186"
                            height="56"
                        />
                    </a>
                    <a href="https://app.swapcard.com/login" target="_blank">
                        <img
                            :src="`/swapcard-${locale}.svg`"
                            :alt="t('Accéder à l’application Web de Swapcard')"
                            width="186"
                            height="56"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="postcss" scoped>
.home-header {
    background-color: var(--beige-100);
    margin: 0 auto 40px;
    @media (--lg) {
        margin: 0 auto 64px;
    }
}
.placeholder {
    aspect-ratio: 3 / 5;
    @media (--lg) {
        aspect-ratio: 5 / 3;
    }
}
.event-infos-wrapper {
    text-align: center;
    margin: 40px auto 0;
    width: 100%;
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    @media (--md) {
        padding: 0 32px;
    }
    @media (--lg) {
        margin: 64px auto 0;
    }
}
.infos-title {
    display: inline-flex;
    padding: 8px 16px;
    background: var(--color-white);
    color: var(--gray-900);
    border-radius: 8px;
    font-size: rem(20px);
    line-height: 1.5;
    font-weight: 500;
    margin: 0;
}
.infos-text {
    font-size: rem(32px);
    line-height: 1.2;
    font-weight: 500;
    color: var(--gray-900);
    text-align: center;
    letter-spacing: -0.96px;
    @media (--lg) {
        font-size: rem(48px);
    }
}
.infos-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3px;
    @media (--lg) {
        gap: 8px;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Participer": "Participate",
        "Télécharge l’application SwapCard": "Download the SwapCard app",
        "Si tu as manqué des conférences à l’édition 2026, les rediffusions sont en cours.": "If you missed some talks at the 2026 edition, the replays are now available.",
        "Télécharger Swapcard sur l’App Store": "Download Swapcard on the App Store",
        "Télécharger Swapcard sur Google Play": "Download Swapcard on Google Play",
        "Accéder à l’application Web de Swapcard": "Go to the Swapcard Web application"
    }
}
</i18n>
