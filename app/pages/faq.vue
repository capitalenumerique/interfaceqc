<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
    </div>
</template>

<script setup>
import { components } from '~/slices';

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData('faq', () => {
    return prismic.client.getSingle('faq', { lang: `${locale.value}-ca` });
});

useSeoMeta({
    title: page.value?.data.meta_title,
    description: page.value?.data.meta_description,
});
</script>
