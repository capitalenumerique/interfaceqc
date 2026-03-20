<script setup lang="ts">
import { isFilled, type Content } from '@prismicio/client';
import { groupBy } from 'es-toolkit';

import IconAsterisk from '@/assets/svg/shapes/asterisk.svg?component';
import IconLemon from '@/assets/svg/shapes/lemon.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(
    getSliceComponentProps<Content.PartnersGridSlice>(['slice', 'index', 'slices', 'context']),
);

const { t } = useI18n();

const categories = groupBy(slice.primary.partners_grid, (item) => {
    if (isFilled.contentRelationship(item.partner)) {
        return item.partner.data?.category ?? 'Autres';
    }
    return 'Autres';
});

const sortOrder = ['Partenaire présentateur', 'Partenaires'];

const sortedCategories = Object.fromEntries(
    Object.entries(categories).sort((a, b) => sortOrder.indexOf(a[0]) - sortOrder.indexOf(b[0])),
);
</script>

<template>
    <section class="partners-section" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <SliceIntro
            v-if="slice.primary.title && slice.primary.description && $prismic.isFilled.link(slice.primary.cta)"
        >
            <template v-if="slice.primary.title" #title><span v-html="slice.primary.title"></span></template>
            <template v-if="slice.primary.description" #wysiwyg>{{ slice.primary.description }}</template>
            <template v-if="slice.primary.cta.url" #cta>
                <PrimaryButton
                    :to="slice.primary.cta.url"
                    :target="slice.primary.cta.link_type === 'Web' ? slice.primary.cta.target : undefined"
                >
                    {{ slice.primary.cta.text }}
                </PrimaryButton>
            </template>
        </SliceIntro>
        <ul v-if="slice.primary.partners_grid" class="partners-grid">
            <li v-for="(category, title) in sortedCategories" :key="title">
                <h3 v-if="Object.values(sortedCategories).length > 1">{{ t(title) }}</h3>
                <ul class="partners-group">
                    <li v-for="(item, index) in category" :key="index" class="partner-item">
                        <a
                            v-if="
                                $prismic.isFilled.contentRelationship(item.partner) &&
                                $prismic.isFilled.link(item.partner.data?.website)
                            "
                            :href="item.partner.data.website.url"
                            target="_blank"
                        >
                            <NuxtImg
                                class="partner-logo"
                                :src="item.partner.data.logo.url?.split('?')[0]"
                                :alt="item.partner.data.name"
                                :width="item.partner.data.category === 'Partenaire présentateur' ? 300 : 200"
                                :format="
                                    !item.partner.data.logo.url?.includes('interface-qc.cdn.prismic.io')
                                        ? 'webp'
                                        : undefined
                                "
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
    /* gap: 40px; */
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 0 16px;
    @media (--md) {
        padding: 0 32px;
    }
    h3 {
        font-size: rem(24px);
        font-weight: 500;
        margin-bottom: 0;
        text-align: center;
    }
}
.partners-group {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    gap: 24px;
    justify-content: space-around;
}
.partner-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: calc(50% - 24px);
    flex-grow: 1;
    @media (--md) {
        flex-basis: calc(33% - 24px);
    }
    @media (--lg) {
        flex-basis: calc(25% - 24px);
    }
}
.partner-logo {
    object-fit: contain;
    aspect-ratio: 1 / 1;
}
</style>

<i18n lang="json">
{
    "en": {
        "Partenaire présentateur": "Presenting partner",
        "Partenaires": "Partners",
        "Autres": "Others"
    }
}
</i18n>
