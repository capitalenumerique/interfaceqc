<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="text-slice">
        <h2 class="text-title">
            <span class="container">{{ slice.primary.title }}</span>
        </h2>
        <div class="container">
            <div class="content wysiwyg">
                <PrismicRichText :field="slice.primary.content" />
            </div>
        </div>
    </section>
</template>

<style lang="postcss" scoped>
.text-slice {
    margin: 64px auto;
}
.text-title {
    font-size: rem(18px);
    font-weight: 700;
    padding: 24px 0;
    border-top: 1px solid var(--gray-900);
    border-bottom: 1px solid var(--gray-900);
    margin: 0;
}
.container {
    display: block;
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    margin: 0 auto;
    width: 100%;
    @media (--md) {
        padding: 0 32px;
    }
    .content {
        margin: 48px 0 96px;
        max-width: 768px;
    }
}
</style>
