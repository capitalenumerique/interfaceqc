<script setup lang="ts">
import type { Content } from '@prismicio/client';
import { useBreakpoints } from '@vueuse/core';
import IconAsterisk from '@/assets/svg/shapes/asterisk.svg?component';
import IconHexagon from '@/assets/svg/shapes/hexagon.svg?component';
import IconLemon from '@/assets/svg/shapes/lemon.svg?component';
import IconStar from '@/assets/svg/shapes/star.svg?component';
import IconLogo from '@/assets/svg/logo.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HomeHeaderSlice>(['slice', 'index', 'slices', 'context']));

const { t, locale } = useI18n();
const activeIndex = ref(0);
const shapes = [IconAsterisk, IconLemon, IconStar, IconHexagon];
const shapesColors = ['--orange-400', '--red-500', '--green-700', '--red-500'];
const backgroundColors = ['--blue-700', '--pink-300', '--teal-500', '--yellow-200'];

const breakpoints = useBreakpoints({ lg: 1024 }, { ssrWidth: 1024 });
const showMarquee = breakpoints.smaller('lg');

function changeShape() {
    if (activeIndex.value < shapes.length - 1) {
        activeIndex.value++;
    } else {
        activeIndex.value = 0;
    }
}
</script>

<template>
    <section class="home-header">
        <div class="header-top">
            <span class="header-text" v-html="t('27 au 29 <br>mai 2025')"> </span>
            <span class="header-text" v-html="t('Terminal de croisière <br>Port de Québec')"> </span>
        </div>
        <BouncingAnimation class="bouncing-animation-zone" @bounce="changeShape">
            <div class="bouncing-object" :style="{ backgroundColor: `var(${backgroundColors[activeIndex]})` }">
                <component
                    :is="shapes[activeIndex]"
                    class="shape"
                    :style="{ fill: `var(${shapesColors[activeIndex]})` }"
                />
            </div>
        </BouncingAnimation>
        <ClientOnly v-if="showMarquee">
            <Vue3Marquee>
                <IconLogo class="logo" />
            </Vue3Marquee>
        </ClientOnly>
        <IconLogo v-else class="logo" />
        <div class="event-infos-wrapper">
            <div class="event-infos infos-top">
                <h2 class="infos-title">{{ slice.primary.title }}</h2>
                <p class="infos-text">{{ slice.primary.description }}</p>
            </div>
            <!-- <div class="event-infos infos-bottom">
                <PrimaryButton
                    to="https://ti.to/cnum/interface-2025"
                    target="_blank"
                    primary-color="green-800"
                    secondary-color="yellow-200"
                >
                    {{ t('Participer') }}
                </PrimaryButton>
                <IconAsterisk width="40" />
            </div> -->
            <div class="event-infos infos-bottom infos-download">
                <div>
                    <h2 class="infos-title">{{ t('Téléchargez notre application mobile') }}</h2>
                    <p class="infos-text">
                        {{ t('Découvrez notre programmation et faites votre parcours comme vous voulez mes chums.') }}
                    </p>
                    <div class="infos-links">
                        <a href="https://apps.apple.com/ca/app/swapcard-smart-event-app/id879488719" target="_blank">
                            <img :src="`/app-store-${locale}.svg`" alt="" />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.swapcard.apps.android&pcampaignid=web_share"
                            target="_blank"
                        >
                            <img :src="`/google-play-${locale}.svg`" alt="" />
                        </a>
                    </div>
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
.header-top {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 32px 16px;
    @media (--md) {
        max-width: 1150px;
        width: 70%;
        padding: 32px 16px;
    }
    @media (--lg) {
        padding: 64px 48px;
    }
}
.header-text {
    font-size: rem(20px);
    font-weight: 500;
    @media (--lg) {
        font-size: rem(24px);
    }
}
.bouncing-animation-zone {
    height: 38vh;
    @media (--lg) {
        height: 50vh;
    }
}
.bouncing-object {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 20px;
    @media (--lg) {
        width: 250px;
        height: 250px;
    }
}
.shape {
    width: 75%;
}
.logo {
    position: relative;
    display: block;
    margin-left: 50px;
    fill: var(--gray-900);
    height: 150px;
    max-width: 100%;
    z-index: 1;
    @media (--lg) {
        margin: auto;
        width: var(--page-container-max-width);
        height: auto;
        padding: 0 16px;
    }
}
.event-infos-wrapper {
    margin: 40px auto 0;
    width: 100%;
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    @media (--lg) {
        margin: 64px auto 0;
    }
}
.event-infos {
    background-color: var(--yellow-200);
    color: var(--green-800);
    border-radius: 20px;
    padding: 24px 16px;
    @media (--lg) {
        border-radius: 40px;
        padding: 32px;
    }
}

.infos-top {
    .infos-title {
        font-size: rem(18px);
        font-weight: 600;
        margin-bottom: 24px;
        text-transform: lowercase;
        text-wrap: pretty;
        @media (--lg) {
            font-size: rem(20px);
            margin-bottom: 32px;
        }
    }
    .infos-text {
        font-size: rem(28px);
        font-weight: 600;
        margin: 0;
        text-wrap: pretty;
        @media (--lg) {
            font-size: rem(48px);
        }
    }
}
.infos-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .infos-title {
        font-size: rem(18px);
        font-weight: 600;
        margin-bottom: 16px;
        text-wrap: pretty;
        @media (--lg) {
            font-size: rem(20px);
            margin-bottom: 16px;
        }
    }
    .infos-text {
        font-size: rem(28px);
        font-weight: 600;
        margin: 16px 0;
        text-wrap: balance;
        @media (--lg) {
            font-size: rem(36px);
        }
    }
    .primary-button {
        text-transform: lowercase;
    }
    .infos-links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 24px;
        @media (--lg) {
            margin-top: 32px;
        }
    }
    img {
        height: 44px;
        @media (--lg) {
            height: 56px;
        }
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "27 au 29 <br>mai 2025": "May 27 to 29 <br>2025",
        "Terminal de croisière <br>Port de Québec": "Cruise Terminal <br>Port of Québec",
<<<<<<< HEAD
=======
        "Qu’est-ce que l’événement?": "What is the event?",
>>>>>>> @{-1}
        "Participer": "Participate",
        "Téléchargez notre application mobile": "Download our mobile application",
        "Découvrez notre programmation et faites votre parcours comme vous voulez mes chums.": "Discover our programming and make your schedule as you want my friends."
    }
}
</i18n>
