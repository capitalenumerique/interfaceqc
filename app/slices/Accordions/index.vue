<script setup lang="ts">
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.AccordionsSlice>(['slice', 'index', 'slices', 'context']));
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="accordions-slice">
        <ul class="accordion-list">
            <AppAccordion
                v-for="accordion in slice.primary.accordions"
                :key="accordion.title"
                :title="accordion.title"
                class="wysiwyg"
            >
                <PrismicRichText :field="accordion.content" />
            </AppAccordion>
        </ul>
    </section>
</template>

<style lang="postcss" scoped>
.accordions-slice {
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    margin: 64px auto;
    @media (--md) {
        padding: 0 32px;
    }
}
.accordion-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0;
    padding: 0;
    list-style: none;
    max-width: 1052px;
}
</style>
