<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.Text2ColumnsSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="text-2columns">
        <div class="block-grid">
            <div>
                <div class="block-surtitle">{{ slice.primary.surtitle }}</div>
                <h2 class="block-title">{{ slice.primary.title }}</h2>
            </div>
            <div class="block-content wysiwyg">
                <PrismicRichText :field="slice.primary.content" />
            </div>
        </div>
    </section>
</template>

<style lang="postcss" scoped>
.text-2columns {
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    margin: 32px auto;
    @media (--lg) {
        margin: 64px auto;
    }
}
.block-surtitle {
    font-weight: 600;
    margin: 0;
    margin-bottom: 12px;
}
.block-title {
    font-size: rem(48px);
    font-weight: 600;
    margin: 0;
}
.block-content {
    font-size: rem(20px);
}
.block-grid {
    display: grid;
    gap: 24px;
    @media (--lg) {
        grid-template-columns: 6fr 4fr;
    }
}
</style>
