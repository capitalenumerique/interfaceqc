<script setup>
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
    display: inline-block;
    color: var(--gray-900);
    text-decoration: none;
    font-weight: 500;
    padding: 12px 0;
}
</style>
