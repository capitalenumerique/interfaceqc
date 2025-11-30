<script lang="ts" setup>
import { components } from '~/slices';

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData(`home-${locale.value}`, () => {
    return prismic.client.getSingle('home', { lang: `${locale.value}-ca` });
});
</script>

<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
        <NewsletterSection />
    </div>
</template>
