<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.Text2ColumnsSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="text-2columns">
        <div class="slice-grid">
            <div>
                <div v-if="slice.primary.surtitle" class="slice-surtitle">{{ slice.primary.surtitle }}</div>
                <h2 class="slice-title">{{ slice.primary.title }}</h2>
            </div>
            <div class="slice-content wysiwyg">
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
.slice-surtitle {
    font-weight: 600;
    margin: 0;
    margin-bottom: 12px;
}
.slice-title {
    font-size: rem(32px);
    font-weight: 600;
    margin: 0;
    @media (--lg) {
        font-size: rem(48px);
    }
}
.slice-content {
    font-size: rem(18px);
    line-height: 1.5;
    color: var(--gray-600);
    @media (--lg) {
        font-size: rem(20px);
    }
}
.slice-grid {
    display: grid;
    gap: 24px;
    @media (--lg) {
        grid-template-columns: 6fr 4fr;
    }
}
</style>
