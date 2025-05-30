<script setup lang="ts">
import IconHalfCircle from '@/assets/svg/shapes/half-circle.svg?component';
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextImageSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="text-image-slice">
        <div class="content">
            <h2 class="content-title">
                {{ slice.primary.title }}
            </h2>
            <p v-if="slice.primary.text" class="content-description">{{ slice.primary.text }}</p>
            <div v-if="slice.primary.cta.url" class="content-cta">
                <PrimaryButton :to="slice.primary.cta.url">{{ slice.primary.cta.text }}</PrimaryButton>
                <IconHalfCircle class="icon-half-circle" />
            </div>
        </div>
        <div class="images-wrapper">
            <PrismicImage :field="slice.primary.image_2" class="image-2" width="160" height="200" />
            <PrismicImage :field="slice.primary.image_1" class="image-1" width="360" height="450" />
        </div>
    </section>
</template>

<style lang="postcss" scoped>
.text-image-slice {
    display: flex;
    justify-content: space-between;
    margin: 64px auto;
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    flex-direction: column;
    @media (--md) {
        padding: 0 32px;
    }
    @media (--lg) {
        align-items: flex-end;
        flex-direction: row;
        margin: 100px auto;
    }
}
.content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
}
.content-title {
    font-size: rem(32px);
    font-weight: 600;
    max-width: 760px;
    flex-shrink: 0;
    margin: 0;
    margin-bottom: 24px;
    @media (--lg) {
        font-size: rem(48px);
        margin-right: -160px;
    }
}
.content-description {
    margin: 0;
}
.content-cta {
    display: flex;
    flex-direction: column;
    font-size: rem(16px);
    line-height: 1.777;
    gap: 90px;
    margin-top: 40px;
    @media (--lg) {
        gap: 44px;
        font-size: rem(18px);
        align-items: flex-start;
        max-width: 668px;
    }
    .primary-button {
        text-transform: lowercase;
    }
    .icon-half-circle {
        width: 48px;
        color: var(--teal-DEFAULT);
    }
}
.images-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
    margin-right: -16px;
    margin-top: -106px;
    @media (--lg) {
        flex-shrink: 0;
        width: 544px;
        margin-right: -35px;
    }
    img {
        flex-shrink: 0;
    }
    .image-1 {
        width: 66%;
        height: auto;
    }
    .image-2 {
        width: 30%;
        height: auto;
        border-radius: 12px;
    }
}
</style>
