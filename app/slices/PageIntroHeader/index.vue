<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.PageIntroHeaderSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <header class="page-header" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <h1 class="header-title">{{ slice.primary.title }}</h1>
        <div class="header-intro">
            <PrismicRichText :field="slice.primary.introduction" />
        </div>
        <PrimaryButton v-if="slice.primary.cta.url" :to="slice.primary.cta.url" class="header-cta">
            {{ slice.primary.cta.text }}
        </PrimaryButton>
    </header>
</template>

<style lang="postcss" scoped>
.page-header {
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    margin: 64px auto;
}
.header-title {
    font-size: rem(36px);
    font-weight: 600;
    margin-bottom: 16px;
    @media (--lg) {
        font-size: rem(72px);
        margin-bottom: 24px;
    }
}
.header-intro {
    font-size: rem(18px);
    color: var(--gray-700);
    @media (--lg) {
        font-size: rem(36px);
        font-weight: 500;
    }
    :deep(p) {
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.header-cta {
    text-transform: lowercase;
    margin-top: 24px;
}
</style>
