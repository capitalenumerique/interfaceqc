<script lang="ts" setup>
import { components } from '~/slices';

definePageMeta({
    i18n: {
        paths: {
            fr: '/partenaires',
        },
    },
});

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData(`partners-${locale.value}`, () => {
    return prismic.client.getSingle('partners', { lang: `${locale.value}-ca` });
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
