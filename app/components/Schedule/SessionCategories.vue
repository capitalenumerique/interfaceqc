<template>
    <ul class="categories-list">
        <li
            v-for="(category, j) in categories"
            :key="`category-${listId}-${j}`"
            :style="getCategoryStyle(category.colors)"
            class="category-item"
        >
            {{ category.name }}
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    listId: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    hoverColors: {
        type: Object,
        default: null,
    },
});

const getCategoryStyle = (colors) => {
    return {
        '--category-bg': colors.bg,
        '--category-text': colors.text,
        '--hover-text': props.hoverColors?.['--hover-bg'] || colors.bg,
        '--hover-bg': props.hoverColors?.['--hover-text'] || colors.text,
    };
};
</script>

<style lang="postcss" scoped>
.categories-list {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 0;
}
.category-item {
    font-size: rem(14px);
    padding: 8px;
    border-radius: 6px;
    font-weight: 700;
    background-color: var(--category-bg);
    color: var(--category-text);
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition);
}
</style>
