<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
    </div>
</template>

<script setup>
import { components } from '~/slices';
const { locale } = useI18n();

const prismic = usePrismic();

const { data: page } = await useAsyncData('about_us', () => {
    return prismic.client.getSingle('about_us', { lang: `${locale.value}-ca` });
});

useSeoMeta({
    title: page.value?.data.meta_title,
    description: page.value?.data.meta_description,
});
</script>
