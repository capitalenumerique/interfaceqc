<script setup lang="ts">
import type { Content } from '@prismicio/client';

import PixelWaveSection from '@/components/PixelWaveSection.vue';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(getSliceComponentProps<Content.TextImageSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <PixelWaveSection
        :data-slice-type="slice.slice_type"
        :data-slice-variation="slice.variation"
        class="text-image-slice-wrapper"
    >
        <div class="text-image-slice" :class="{ 'text-image-slice--flip': slice.primary.flip }">
            <div class="content">
                <h2 class="content-title" v-html="slice.primary.title"></h2>
                <p v-if="slice.primary.text" class="content-description wysiwyg">{{ slice.primary.text }}</p>
                <div v-if="$prismic.isFilled.link(slice.primary.cta)" class="content-cta">
                    <PrimaryButton
                        :to="slice.primary.cta.url"
                        :target="slice.primary.cta.link_type === 'Web' ? slice.primary.cta.target : undefined"
                    >
                        {{ slice.primary.cta.text }}
                    </PrimaryButton>
                </div>
            </div>
            <div class="image-wrapper">
                <NuxtImg
                    class="image"
                    :src="slice.primary.image_1.url?.split('?')[0]"
                    :alt="slice.primary.image_1.alt || ''"
                    width="520"
                    height="650"
                    :format="!slice.primary.image_1.url?.includes('interface-qc.cdn.prismic.io') ? 'webp' : undefined"
                />
            </div>
        </div>
    </PixelWaveSection>
</template>

<style lang="postcss" scoped>
.text-image-slice-wrapper {
    background-color: var(--color-secondary);
}
.text-image-slice {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    max-width: var(--page-container-max-width);
    margin: auto;
    padding: 40px 16px 0;
    flex-direction: column;
    gap: 40px;
    @media (--md) {
        padding: 40px 32px 0;
    }
    @media (--lg) {
        flex-direction: row;
    }
    &.text-image-slice--flip {
        @media (--lg) {
            flex-direction: row-reverse;
        }
    }
}
.image-wrapper {
    position: relative;
    flex-shrink: 0;
    mask-image: url('@/assets/svg/star-overlay.svg');
    mask-position: center;
    mask-repeat: no-repeat;
}
@keyframes rotating {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
.image {
    display: block;
    margin: auto;
}
.content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    background-color: var(--beige-100);
    border-radius: 16px;
    padding: 40px;
}
.content-title {
    font-size: rem(32px);
    font-weight: 500;
    flex-shrink: 0;
    margin: 0 0 24px;
    @media (--lg) {
        font-size: rem(48px);
        margin-bottom: 40px;
    }
    :deep(em) {
        font-family: var(--font-secondary);
    }
}
.wysiwyg {
    margin: 0;
    font-size: rem(16px);
    line-height: 1.777;
    @media (--lg) {
        font-size: rem(18px);
    }
}
.content-cta {
    display: flex;
    flex-direction: column;
    font-size: rem(16px);
    line-height: 1.777;
    margin-top: 32px;
    @media (--lg) {
        font-size: rem(18px);
        align-items: flex-start;
    }
}
</style>
