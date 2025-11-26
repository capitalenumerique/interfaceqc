<template>
    <component
        :is="component"
        :to="to"
        :class="{
            'is-outlined': outline,
            'is-small': small,
        }"
        class="primary-button"
        :style="{
            '--primary-color': `var(--${primaryColor})`,
            '--secondary-color': `var(--${secondaryColor})`,
        }"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { NuxtLinkLocale } from '#components';

const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    to: {
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
    primaryColor: {
        type: String,
        default: 'gray-900',
    },
    secondaryColor: {
        type: String,
        default: 'beige-100',
    },
});

const component = computed(() => {
    if (props.to) return NuxtLinkLocale;
    return 'button';
});
</script>

<style lang="postcss" scoped>
.primary-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-weight: 500;
    font-size: rem(16px);
    line-height: 20px;
    border-radius: 12px;
    cursor: pointer;
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition);
    border: 2px solid var(--primary-color);
    text-decoration: none;
    &:hover,
    &:focus-visible {
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }
}
.is-outlined {
    color: var(--primary-color);
    background-color: transparent;
    border-color: var(--primary-color);
    &:hover,
    &:focus-visible {
        background-color: var(--primary-color);
        color: var(--secondary-color);
    }
}
.is-small {
    padding: 12px 24px;
    border-radius: 8px;
}
</style>
