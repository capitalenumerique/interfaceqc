<script lang="ts" setup>
import { components } from '~/slices';

definePageMeta({
    i18n: {
        paths: {
            fr: '/a-propos',
        },
    },
});

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData(`about-us-${locale.value}`, () => {
    return prismic.client.getSingle('about_us', { lang: `${locale.value}-ca` });
});

useSeoMeta({
    title: page.value?.data.meta_title,
    description: page.value?.data.meta_description,
});
</script>

<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
    </div>
</template>
