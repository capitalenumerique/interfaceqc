<script setup lang="ts">
import { NuxtLinkLocale } from '#components';
import type { Content } from '@prismicio/client';

import PixelWaveSection from '@/components/PixelWaveSection.vue';

import IconArrow from '@/assets/svg/arrow.svg?component';
import IconBow from '@/assets/svg/symbols/bow.svg?component';
import IconCandle from '@/assets/svg/symbols/candle.svg?component';
import IconCherries from '@/assets/svg/symbols/cherries.svg?component';
import IconCocktail from '@/assets/svg/symbols/cocktail.svg?component';
import IconDisco from '@/assets/svg/symbols/disco.svg?component';
import IconHexagonOverlay from '@/assets/svg/hexagon-overlay.svg?component';
import IconSwirl from '@/assets/svg/symbols/swirl.svg?component';
import IconVase from '@/assets/svg/symbols/vase.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HomeProgrammingSlice>(['slice', 'index', 'slices', 'context']));

const { t } = useI18n();
const icons = [IconBow, IconCandle, IconCherries, IconCocktail, IconDisco, IconSwirl, IconVase];
</script>

<template>
    <PixelWaveSection
        :data-slice-type="slice.slice_type"
        :data-slice-variation="slice.variation"
        wave-placements="top"
        class="home-schedule"
    >
        <SliceIntro>
            <template #title>
                <span v-html="t('La programmation<br /> <em>2026</em>')"></span>
            </template>
            <template #wysiwyg>{{ slice.primary.description }}</template>
            <template #cta>
                <PrimaryButton to="schedule">{{ t('Voir la programmation complète') }}</PrimaryButton>
            </template>
        </SliceIntro>
        <ul class="speaker-list">
            <li
                v-for="(speaker, index) in slice.primary.speakers.slice(0, 7)"
                :key="`${speaker.first_name} ${speaker.last_name}`"
                class="speaker-tile"
            >
                <Component
                    :is="speaker.session_url ? NuxtLinkLocale : 'div'"
                    :to="speaker.session_url"
                    class="tile-link"
                >
                    <div class="speaker-image-wrapper">
                        <IconHexagonOverlay class="overlay" />
                        <NuxtImg
                            :src="speaker.img.url?.split('?')[0]"
                            :alt="`${speaker.first_name} ${speaker.last_name}`"
                            width="322"
                            height="375"
                            format="webp"
                        />
                    </div>
                    <div class="tile-content">
                        <div class="speaker-title-wrapper">
                            <h3 class="tile-title">
                                {{ speaker.first_name }}<br />
                                {{ speaker.last_name }}
                            </h3>
                            <component :is="icons[index]" width="36" height="36" />
                        </div>
                        <div class="speaker-subtitle">{{ speaker.job }}</div>
                    </div>
                </Component>
            </li>
            <li class="tile-view-all">
                <NuxtLinkLocale to="schedule" class="tile-link">
                    <h3 class="tile-title" v-html="t('Voir <br>la programmation <br>complète')"></h3>
                    <div class="arrow-wrapper">
                        <IconArrow class="icon-arrow" width="20" height="20" />
                    </div>
                </NuxtLinkLocale>
            </li>
        </ul>
    </PixelWaveSection>
</template>

<style lang="postcss">
.theme-day {
    .speaker-tile .tile-link {
        &:hover,
        &:focus-visible {
            color: var(--color-secondary-light) !important;
        }
    }
}
</style>
<style lang="postcss" scoped>
.home-schedule {
    margin: 64px 0;
    background-color: var(--color-secondary);
    @media (--lg) {
        margin: 100px 0;
    }
}
.speaker-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    @media (--lg) {
        grid-template-columns: repeat(4, 1fr);
    }
}
.speaker-tile {
    width: 100%;
    border: 1px solid var(--color-secondary-light);
    .tile-link {
        background-color: var(--color-primary);
        &:hover,
        &:focus-visible {
            background-color: var(--color-accent);
            color: var(--color-primary);
            .overlay {
                transform: scale(1.8);
            }
        }
    }
}
.speaker-image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    .overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        fill: var(--color-accent);
        transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        transform: scale(4);
    }
    img {
        display: block;
        width: 100%;
    }
}
.tile-link {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    transition: background-color 300ms ease-in-out;
    color: var(--color-secondary-light);
}
.speaker-title-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    svg {
        flex-shrink: 0;
    }
}
.tile-title {
    font-size: rem(16px);
    margin: 0;
    text-transform: lowercase;
    font-weight: 400;
    @media (--md) {
        font-size: rem(24px);
    }
}
.speaker-subtitle {
    font-size: rem(12px);
}
.tile-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 8px;
    padding: 16px;
    @media (--md) {
        gap: 16px;
    }
}
.tile-view-all {
    border: 1px solid var(--color-secondary-light);
    .tile-link {
        padding: 16px;
        background-color: var(--gray-900);
        @media (--lg) {
            padding: 32px;
        }
        &:hover,
        &:focus-visible {
            .arrow-wrapper {
                transform: scale(1.1);
            }
        }
    }
}
.arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background-color: var(--color-secondary-light);
    transition: transform 300ms ease-in-out;
    margin-left: auto;
}
.icon-arrow {
    fill: var(--gray-900);
}
</style>

<i18n lang="json">
{
    "en": {
        "La programmation<br /> <em>2026</em>": "The <em>2026</em><br /> schedule",
        "Voir la programmation complète": "See the complete schedule",
        "Voir <br>la programmation <br>complète": "See <br>the complete <br>schedule",
        "Précédent": "Previous",
        "Suivant": "Next"
    }
}
</i18n>
