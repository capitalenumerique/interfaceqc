<script setup lang="ts">
import type { Content } from '@prismicio/client';
import { groupBy } from 'es-toolkit';

import IconAsterisk from '@/assets/svg/shapes/asterisk.svg?component';
import IconLemon from '@/assets/svg/shapes/lemon.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(
    getSliceComponentProps<Content.PartnersGridSlice>(['slice', 'index', 'slices', 'context']),
);

const categories = groupBy(slice.primary.partners_grid, (item) => item.partner.data?.category ?? 'Autres');

const sortOrder = ['Principaux', 'Secondaires'];

const sortedCategories = Object.fromEntries(
    Object.entries(categories).sort((a, b) => sortOrder.indexOf(a[0]) - sortOrder.indexOf(b[0])),
);
</script>

<template>
    <section class="partners-section" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <BouncingAnimation class="animation-container" :duration="9000">
            <IconAsterisk class="asterisk" width="180" />
        </BouncingAnimation>
        <BouncingAnimation class="animation-container is-reversed" :duration="9000">
            <IconLemon class="lemon" width="180" />
        </BouncingAnimation>
        <SliceIntro v-if="slice.primary.title && slice.primary.description && slice.primary.cta.url">
            <template v-if="slice.primary.title" #title>{{ slice.primary.title }}</template>
            <template v-if="slice.primary.description" #wysiwyg>{{ slice.primary.description }}</template>
            <template v-if="slice.primary.cta.url" #cta>
                <PrimaryButton :to="slice.primary.cta.url">
                    {{ slice.primary.cta.text }}
                </PrimaryButton>
            </template>
        </SliceIntro>
        <ul v-if="slice.primary.partners_grid" class="partners-grid">
            <li v-for="(category, title) in sortedCategories" :key="title">
                <h3 v-if="Object.values(sortedCategories).length > 1">{{ title }}</h3>
                <ul class="partners-group">
                    <li v-for="(item, index) in category" :key="index" class="partner-item">
                        <a :href="item.partner.data.website.url" target="_blank">
                            <img
                                class="partner-logo"
                                :src="item.partner.data.logo.url"
                                :alt="item.partner.data.logo.alt"
                            />
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<style lang="postcss" scoped>
.partners-section {
    position: relative;
    max-width: var(--page-container-max-width);
    margin: 64px auto;
    @media (--lg) {
        margin: 100px auto;
    }
}
.animation-container {
    position: absolute;
    height: 100%;
    z-index: -1;
    &.is-reversed {
        transform: scale(-1, -1);
    }
}
.asterisk {
    fill: var(--teal-500);
}
.lemon {
    fill: var(--pink-300);
}
.partners-grid {
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 0 16px;
    @media (--md) {
        padding: 0 32px;
    }
    h3 {
        font-size: rem(18px);
        font-weight: 600;
        margin-bottom: 24px;
        &::first-letter {
            text-transform: lowercase;
        }
    }
}
.partners-group {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    margin: 0;
    gap: 24px;
    justify-content: space-around;
    @media (--md) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (--lg) {
        grid-template-columns: repeat(4, 1fr);
    }
}
.partner-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.partner-logo {
    width: 160px;
    height: 160px;
    object-fit: contain;
    @media (--lg) {
        width: 200px;
        height: 200px;
    }
}
</style>
