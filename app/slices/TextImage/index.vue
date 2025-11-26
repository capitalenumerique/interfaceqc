<script setup lang="ts">
import IconHalfCircle from '@/assets/svg/shapes/half-circle.svg?component';
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextImageSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <section
        :data-slice-type="slice.slice_type"
        :data-slice-variation="slice.variation"
        class="text-image-slice"
        :class="{ 'text-image-slice--flip': slice.primary.flip }"
    >
        <div class="content">
            <div class="content-inner">
                <h2 class="content-title">{{ slice.primary.title }}</h2>
                <p v-if="slice.primary.text" class="content-description wysiwyg">{{ slice.primary.text }}</p>
            </div>
            <div v-if="slice.primary.cta.url" class="content-cta">
                <PrimaryButton :to="slice.primary.cta.url">{{ slice.primary.cta.text }}</PrimaryButton>
                <IconHalfCircle class="icon-half-circle" />
            </div>
        </div>
        <div class="images-wrapper">
            <NuxtImg
                class="image-2"
                :src="slice.primary.image_2.url.split('?')[0]"
                :alt="slice.primary.image_2.alt || ''"
                width="160"
                height="200"
                format="webp"
            />
            <NuxtImg
                class="image-1"
                :src="slice.primary.image_1.url.split('?')[0]"
                :alt="slice.primary.image_1.alt || ''"
                width="360"
                height="450"
                format="webp"
            />
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
    gap: 40px;
    @media (--md) {
        padding: 0 32px;
    }
    @media (--lg) {
        align-items: flex-end;
        flex-direction: row;
        margin: 100px auto;
    }
    &.text-image-slice--flip {
        @media (--lg) {
            flex-direction: row-reverse;
        }
    }
}
.content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
}
.content-inner {
    @media (--lg) {
        margin-right: -200px;
    }
    .text-image-slice--flip & {
        @media (--lg) {
            margin-left: -200px;
            margin-right: 0;
        }
    }
}
.content-title {
    font-size: rem(32px);
    font-weight: 600;
    flex-shrink: 0;
    margin: 0;
    margin-bottom: 24px;
    @media (--lg) {
        font-size: rem(48px);
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
    gap: 90px;
    margin-top: 40px;
    @media (--lg) {
        gap: 56px;
        font-size: rem(18px);
        align-items: flex-start;
        max-width: 668px;
        margin-top: 70px;
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
    display: grid;
    grid-template-columns: 4fr 9fr;
    align-items: flex-end;
    gap: 24px;
    width: 100%;
    margin-top: -150px;
    align-self: end;
    @media (--sm) {
        margin-top: -234px;
        max-width: 70%;
    }
    @media (--lg) {
        flex-shrink: 0;
        width: 544px;
    }
    .text-image-slice--flip & {
        grid-template-columns: 9fr 4fr;
        .image-1 {
            order: -1;
        }
    }
    img {
        flex-shrink: 0;
        border-radius: 12px;
        width: 100%;
        height: auto;
    }
}
</style>
