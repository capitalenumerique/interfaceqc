<template>
    <component
        :is="component"
        :href="href"
        :class="{
            'is-outlined': outline,
            'is-small': small,
        }"
        class="primary-button"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    href: {
        type: String,
        default: '',
    },
    outline: {
        type: Boolean,
        default: false,
    },
    small: {
        type: Boolean,
        default: false,
    },
});

const component = computed(() => {
    if (props.href) return resolveComponent('NuxtLink');
    return 'button';
});
</script>

<style lang="postcss" scoped>
.primary-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 18px 32px;
    background-color: var(--gray-900);
    color: var(--beige-100);
    font-weight: 500;
    border-radius: 12px;
    cursor: pointer;
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition);
    border: 2px solid var(--gray-900);
    text-decoration: none;
    &:hover,
    &:focus-visible {
        background-color: var(--beige-100);
        color: var(--gray-900);
    }
}
.is-outlined {
    color: var(--gray-900);
    background-color: transparent;
    border-color: var(--gray-900);
    &:hover,
    &:focus-visible {
        background-color: var(--gray-900);
        color: var(--beige-100);
    }
}
.is-small {
    padding: 12px 24px;
    border-radius: 8px;
}
</style>
