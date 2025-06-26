<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
    </div>
</template>

<script setup>
import { components } from '~/slices';

defineI18nRoute({
    paths: {
        fr: '/a-propos',
    },
});

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData(`about-us-${locale.value}`, () => {
    return prismic.client.getSingle('about_us', {
        graphQuery: `{
            about_us {
                ...about_usFields
                slices {
                    ...on page_intro_header {
                       variation {
                            ...on default {
                                primary {
                                    ...primaryFields
                                }
                            }
                        }
                    }
                    ...on text2_columns {
                       variation {
                            ...on default {
                                primary {
                                    ...primaryFields
                                }
                            }
                        }
                    }
                    ...on volunteers {
                        variation {
                            ...on default {
                                primary {
                                    ...primaryFields
                                    volunteers {
                                        volunteer {
                                            ...volunteerFields
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ...on text_image {
                       variation {
                            ...on default {
                                primary {
                                    ...primaryFields
                                }
                            }
                        }
                    }
                }
            }
        }`,
        lang: `${locale.value}-ca`,
    });
});

useSeoMeta({
    title: page.value?.data.meta_title,
    description: page.value?.data.meta_description,
});
</script>
