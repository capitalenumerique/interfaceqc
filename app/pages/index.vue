<script lang="ts" setup>
import { components } from '~/slices';

definePageMeta({
    layout: 'home',
});

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData(`home-${locale.value}`, () => {
    return prismic.client.getSingle('home', { lang: `${locale.value}-ca` });
});
</script>

<template>
    <div>
        <ClientOnly>
            <HomeHeader />
            <template #placeholder>
                <div class="placeholder"></div>
            </template>
        </ClientOnly>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
        <NewsletterSection />
    </div>
</template>

<style lang="postcss" scoped>
.placeholder {
    aspect-ratio: 3 / 5;
    @media (--lg) {
        aspect-ratio: 5 / 3;
    }
}
</style>
