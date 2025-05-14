<template>
    <div>
        <SliceZone :slices="page?.data?.slices ?? []" :components="components" />
        <NewsletterSection />
    </div>
</template>

<script setup>
import { components } from '~/slices';

const { locale } = useI18n();
const prismic = usePrismic();

const { data: page } = await useAsyncData('home', () => {
    return prismic.client.getSingle('home', {
        graphQuery: `{
            home {
                ...homeFields
                slices {
                    ...on home_header {
                       variation {
                            ...on default {
                                primary {
                                    ...primaryFields
                                }
                            }
                        }
                    }
                    ...on partners_grid {
                        variation {
                            ...on default {
                                primary {
                                    ...primaryFields
                                    partners_grid {
                                        partner {
                                            ...partnerFields
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ...on home_programming {
                       variation {
                            ...on default {
                                primary {
                                    ...primaryFields
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
