<script setup>
const route = useRoute();
const getRouteBaseName = useRouteBaseName();
const i18nHead = useLocaleHead();

useHead(() => ({
    titleTemplate: (title) => {
        if (getRouteBaseName(route) === 'index') return title;
        return title ? `${title} | Interface` : 'Interface';
    },
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs.lang,
    },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])],
}));
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator :height="5" color="#333230" :throttle="500" />
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
    transition: opacity 500ms ease-in-out;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
