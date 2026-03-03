<script lang="ts" setup>
const i18nHead = useLocaleHead();

const { locale, t } = useI18n();
const config = useRuntimeConfig();
const ogImage = computed(() => `${config.public.i18n.baseUrl}/og-image-${locale.value}.png`);

const { eventDates } = useEventDates();

useHead(() => ({
    titleTemplate: (title) => {
        return title ? `${title} | Interface` : `Interface | ${eventDates.value}`;
    },
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs.lang,
    },
    link: [...(i18nHead.value.link || [])],
    meta: [
        ...(i18nHead.value.meta || []),
        {
            property: 'og:image',
            content: ogImage,
        },
    ],
}));

useSeoMeta({
    description: () =>
        t("Découvre Interface, l'événement incontournable du numérique, créé par et pour la communauté!"),
});

const palettes = {
    day: {
        '--color-primary': 'var(--orange-900)', // #871c00
        '--color-secondary': 'var(--blue-200)', // #ccdeff
        '--color-accent': 'var(--orange-600)', // #ff4000
    },
    night: {
        '--color-primary': 'var(--purple-950)', // #570352
        '--color-secondary': 'var(--purple-200)', // #eecfff
        '--color-accent': 'var(--yellow-500)', // #e3d50d
    },
};

function applyPalette() {
    const hour = new Date().getHours();
    const palette = hour >= 9 && hour < 17 ? palettes.day : palettes.night;
    const root = document.documentElement;
    for (const [key, value] of Object.entries(palette)) {
        root.style.setProperty(key, value);
    }
}

onMounted(() => applyPalette());
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

<i18n lang="json">
{
    "en": {
        "Découvre Interface, l'événement incontournable du numérique, créé par et pour la communauté!": "Discover Interface, the must-attend digital event created by and for the community!"
    }
}
</i18n>
