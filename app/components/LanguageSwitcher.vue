<script lang="ts" setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const { $luxon } = useNuxtApp();

watchEffect(() => {
    $luxon.Settings.defaultLocale = locale.value;
});

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
    <NuxtLink v-for="l in availableLocales" :key="l.code" :to="switchLocalePath(l.code)" class="switcher">
        {{ l.code }}
    </NuxtLink>
</template>

<style lang="postcss" scoped>
.switcher {
    display: block;
    font-size: rem(16px);
    line-height: 1.5;
    text-decoration: none;
    color: var(--gray-900);
    font-weight: 500;
    text-transform: uppercase;
    transition: all 300ms ease;
    padding: 8px 12px;
    border-radius: 6px;
    &:hover,
    &:focus-visible {
        font-family: var(--font-secondary);
        background-color: var(--color-secondary);
    }
}
</style>
