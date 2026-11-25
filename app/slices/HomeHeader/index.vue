<script setup lang="ts">
import type { Content } from '@prismicio/client';
import { resolveTags } from '@unhead/vue/utils';
import IconGlyph from '@/assets/svg/shapes/glyph.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HomeHeaderSlice>(['slice', 'index', 'slices', 'context']));

const { t, locale, localeProperties } = useI18n();
const config = useRuntimeConfig();
const { $luxon } = useNuxtApp();
const callForSpeakersOpen = computed(
    () => !!config.public.cfp_url && $luxon.DateTime.now() < $luxon.DateTime.fromISO(config.public.cfp_end_date),
);
const duringOrAfterEvent = ref(false);
const afterEvent = ref(false);

const head = injectHead();
const tags = resolveTags(head);
const titleTag = tags.find((tag) => tag.tag === 'title');
</script>

<template>
    <section class="home-header">
        <ClientOnly>
            <h1 class="sr-only">{{ titleTag?.textContent }}</h1>
            <HeroPuzzle />
            <template #placeholder>
                <div class="placeholder"></div>
            </template>
        </ClientOnly>
        <div class="event-infos-wrapper">
            <div class="event-infos infos-top">
                <h2 v-reveal class="infos-title">{{ slice.primary.title }}</h2>
                <p v-reveal="{ delay: 100 }" class="infos-text">{{ slice.primary.description }}</p>
                <PrimaryButton v-reveal="{ delay: 200 }" :to="$config.public.ticketing_url" target="_blank">
                    {{ t('Participer') }}
                </PrimaryButton>
            </div>
            <div v-if="callForSpeakersOpen" class="event-infos infos-bottom infos-cfp">
                <IconGlyph class="cfp-icon" aria-hidden="true" />
                <h2 v-reveal class="infos-title">{{ t('Appel à conférences') }}</h2>
                <p v-reveal="{ delay: 100 }" class="infos-text">
                    {{ t('Ta place est peut-être sur scène.') }}
                </p>
                <p v-reveal="{ delay: 150 }" class="infos-subtext">
                    {{
                        t(
                            'Retours d’expérience, méthodes, points de vue, parcours qui sortent du cadre : la programmation d’Interface 2027, c’est la communauté qui la construit.',
                        )
                    }}
                </p>
                <PrimaryButton v-reveal="{ delay: 200 }" :to="$config.public.cfp_url" target="_blank">
                    {{ t('Soumettre ma proposition') }}
                </PrimaryButton>
                <p v-reveal="{ delay: 250 }" class="infos-deadline">
                    {{ t('Date limite : 7 février 2027') }}
                </p>
            </div>
            <div v-if="duringOrAfterEvent" class="event-infos infos-bottom">
                <h2 v-reveal class="infos-title">{{ t('Télécharge l’application SwapCard') }}</h2>
                <p v-if="!afterEvent" v-reveal="{ delay: 100 }" class="infos-text">
                    {{ t('Découvre la programmation et fait ton parcours comme tu le veux.') }}
                </p>
                <p v-else v-reveal="{ delay: 100 }" class="infos-text">
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--beige-100);
    margin: 0 auto 40px;
    gap: 40px;
    @media (--lg) {
        margin: 0 auto 64px;
        gap: 64px;
    }
}
.placeholder {
    width: 100%;
    aspect-ratio: 3 / 5;
    @media (--lg) {
        aspect-ratio: 5 / 3;
    }
}
.event-infos-wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    gap: 40px;
    @media (--md) {
        padding: 0 32px;
        gap: 80px;
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
    text-wrap: balance;
}
.infos-text {
    font-size: rem(30px);
    line-height: 1.2;
    font-weight: 500;
    text-align: center;
    letter-spacing: -0.96px;
    text-wrap: balance;
    @media (--lg) {
        font-size: rem(48px);
    }
}
.infos-cfp {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (--lg) {
        gap: 24px;
    }
    .infos-text,
    .infos-subtext {
        margin: 0;
    }
    .infos-deadline {
        margin-top: -8px;
    }
}
.cfp-icon {
    position: absolute;
    z-index: -1;
    right: -40px;
    bottom: -40px;
    width: 180px;
    height: auto;
    fill: var(--color-secondary);
    transform: rotate(-12deg);
    pointer-events: none;
    @media (--lg) {
        right: 40px;
        bottom: -60px;
        width: 300px;
    }
}
.infos-subtext {
    max-width: 640px;
    font-size: rem(16px);
    line-height: 1.5;
    text-wrap: balance;
    @media (--lg) {
        font-size: rem(18px);
    }
}
.infos-deadline {
    margin: 0;
    font-size: rem(14px);
    font-weight: 500;
}
.infos-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3px;
    @media (--lg) {
        gap: 8px;
    }
    a {
        display: flex;
        img {
            width: auto;
            height: 44px;
            @media (--lg) {
                height: 56px;
            }
        }
    }
}
.infos-top {
    .infos-text {
        color: var(--gray-900);
    }
}
.infos-bottom {
    background-color: var(--color-primary);
    color: var(--color-secondary-light);
    padding: 32px 20px;
    border-radius: 12px;
    @media (--lg) {
        padding: 40px;
        border-radius: 20px;
    }
    .infos-title {
        font-size: rem(16px);
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Participer": "Participate",
        "Appel à conférences": "Call for speakers",
        "Ta place est peut-être sur scène.": "Your place might be on stage.",
        "Retours d’expérience, méthodes, points de vue, parcours qui sortent du cadre : la programmation d’Interface 2027, c’est la communauté qui la construit.": "Real-world experiences, methods, points of view, unconventional journeys: Interface 2027’s lineup is built by the community.",
        "Soumettre ma proposition": "Submit my proposal",
        "Date limite : 7 février 2027": "Deadline: February 7, 2027",
        "Télécharge l’application SwapCard": "Download the SwapCard app",
        "Découvre la programmation et fait ton parcours comme tu le veux.": "Discover the schedule and plan your days as you want.",
        "Si tu as manqué des conférences à l’édition 2026, les rediffusions sont en cours.": "If you missed some talks at the 2026 edition, the replays are now available.",
        "Télécharger Swapcard sur l’App Store": "Download Swapcard on the App Store",
        "Télécharger Swapcard sur Google Play": "Download Swapcard on Google Play",
        "Accéder à l’application Web de Swapcard": "Go to the Swapcard Web application"
    }
}
</i18n>
