<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
    </div>
</template>

<script lang="ts" setup>
import { components } from '~/slices';
const { locale } = useI18n();

defineI18nRoute({
    paths: {
        fr: '/billetterie',
    },
});

const prismic = usePrismic();

const { data: page } = await useAsyncData('tickets', () => {
    return prismic.client.getSingle('tickets', {
        graphQuery: `{
            tickets {
                ...ticketsFields
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
                    ...on home_tickets {
                        variation {
                            ...on default {
                                primary {
                                    ...primaryFields
                                    tickets {
                                        ticket_type {
                                            ...ticket_typeFields
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ...on text {
                       variation {
                            ...on default {
                                primary {
                                    ...primaryFields
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
                    ...on accordions {
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
