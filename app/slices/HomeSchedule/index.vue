<script setup lang="ts">
import type { Content } from '@prismicio/client';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

import IconArrow from '@/assets/svg/arrow.svg?component';
import IconStar from '@/assets/svg/shapes/star.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HomeProgrammingSlice>(['slice', 'index', 'slices', 'context']));

const { t } = useI18n();
const swiperRef = ref();

const prev = () => {
    swiperRef.value.slidePrev(300);
};
const next = () => {
    swiperRef.value.slideNext(300);
};
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="home-schedule">
        <SliceIntro>
            <template #title>
                {{ t('La programmation') }}<br />
                {{ new Date().getFullYear() }}
            </template>
            <template #wysiwyg>{{ slice.primary.description }}</template>
            <template #cta>
                <PrimaryButton to="schedule">{{ t('Voir la programmation complète') }}</PrimaryButton>
            </template>
        </SliceIntro>
        <Swiper
            slides-per-view="auto"
            :modules="[Navigation, Autoplay]"
            :loop="true"
            :loop-prevents-sliding="false"
            :centered-slides="true"
            :center-insufficient-slides="true"
            :speed="2000"
            :autoplay="{
                delay: 4000,
                pauseOnMouseEnter: true,
            }"
            @swiper="(s) => (swiperRef = s)"
        >
            <SwiperSlide class="slide-view-all">
                <NuxtLinkLocale to="schedule">
                    <div class="icon-wrapper">
                        <IconStar />
                    </div>
                    <div class="slide-content">
                        <h3 class="speaker-title" v-html="t('Voir <br>la programmation <br>complète')"></h3>
                        <IconArrow class="icon-arrow" />
                    </div>
                </NuxtLinkLocale>
            </SwiperSlide>
            <SwiperSlide
                v-for="(speaker, index) in slice.primary.speakers"
                :key="`${speaker.firstName} ${speaker.lastName}`"
                class="slide-speaker"
                :class="{
                    'is-reversed': index % 2 === 0,
                }"
                :style="{
                    '--backgroundColor': speaker.background_color,
                    '--textColor': speaker.text_color,
                }"
            >
                <NuxtLinkLocale to="index">
                    <PrismicImage :field="speaker.img" />
                    <div class="slide-content">
                        <h3 class="speaker-title">
                            {{ speaker.first_name }}<br />
                            {{ speaker.last_name }}
                        </h3>
                        <div class="speaker-subtitle">{{ speaker.job }}</div>
                    </div>
                </NuxtLinkLocale>
            </SwiperSlide>
            <div class="swiper-actions">
                <button type="button" class="swiper-button-prev" @click="prev">
                    <IconArrow />
                </button>
                <button type="button" class="swiper-button-next" @click="next">
                    <IconArrow />
                </button>
            </div>
        </Swiper>
    </section>
</template>

<style lang="postcss" scoped>
.home-schedule {
    margin: 64px 0;
}
.swiper {
    padding: 30px 0;
    margin: -30px 0;
}
.swiper-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 32px;
    max-width: var(--page-container-max-width);
    padding: 0 16px;
}
.swiper-button-prev,
.swiper-button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid var(--gray-900);
    border-radius: 12px;
    width: 48px;
    height: 48px;
    color: var(--gray-900);
    transition: scale 300ms ease-in-out;
    &:hover,
    &:focus-visible {
        scale: 1.1;
    }
    svg {
        width: 16px;
    }
}
.swiper-button-prev {
    svg {
        rotate: 180deg;
    }
}
.slide-speaker,
.slide-view-all {
    width: 171px;
    height: auto;
    margin-right: 16px;
    @media (--md) {
        width: 322px;
        margin-right: 24px;
    }
    a {
        height: 100%;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: var(--gray-900);
        transition: scale 300ms ease-in-out;
        &:hover {
            scale: 1.1;
        }
    }
    .speaker-title {
        font-size: rem(14px);
        margin: 0;
        @media (--md) {
            font-size: rem(16px);
        }
    }
    .speaker-subtitle {
        font-size: rem(10px);
        @media (--md) {
            font-size: rem(12px);
        }
    }
}
.slide-speaker {
    a {
        border-radius: 20px;
        background-color: var(--backgroundColor, var(--beige-100));
        color: var(--textColor, var(--gray-900));
        border-radius: 8px;
        @media (--md) {
            border-radius: 20px;
        }
    }
    &.is-reversed {
        a {
            flex-direction: column-reverse;
        }
    }
    img {
        border-radius: 8px;
        @media (--md) {
            border-radius: 20px;
        }
    }
    .slide-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
        @media (--md) {
            gap: 16px;
        }
        .speaker-title {
            text-transform: lowercase;
        }
    }
}
.slide-view-all {
    a {
        gap: 16px;
    }
    .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        background-color: var(--pink-300);
        border-radius: 8px;
        @media (--md) {
            border-radius: 20px;
        }
        svg {
            width: 69%;
            fill: var(--green-800);
        }
    }
    .slide-content {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
        border: 1px solid var(--color-black);
        border-radius: 8px;
        @media (--md) {
            border-radius: 20px;
        }
    }
    .icon-arrow {
        width: 16px;
        align-self: flex-end;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "La programmation": "The schedule",
        "Voir la programmation complète": "See the complete schedule",
        "Voir <br>la programmation <br>complète": "See <br>the complete <br>schedule"
    }
}
</i18n>
