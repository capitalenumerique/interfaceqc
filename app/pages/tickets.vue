<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
    </div>
</template>

<script lang="ts" setup>
import { components } from '~/slices';

definePageMeta({
    i18n: {
        paths: {
            fr: '/billetterie',
        },
    },
});

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData(`tickets-${locale.value}`, () => {
    return prismic.client.getSingle('tickets', { lang: `${locale.value}-ca` });
});

useSeoMeta({
    title: page.value?.data.meta_title,
    description: page.value?.data.meta_description,
});
</script>
