<script setup lang="ts">
import type { Content } from '@prismicio/client';
import { useI18n } from 'vue-i18n';
import { groupBy } from 'es-toolkit';

import IconGlyph from '@/assets/svg/shapes/glyph.svg?component';
import IconExternal from '@/assets/svg/external.svg?component';
import IconLinkedin from '@/assets/svg/linkedin.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(getSliceComponentProps<Content.VolunteersSlice>(['slice', 'index', 'slices', 'context']));

const { t } = useI18n();

const categories = groupBy(slice.primary.volunteers, (item) => item.volunteer.data?.comitee ?? 'Autres comités');

const sortOrder = [
    'Comité programmation',
    'Comité web',
    'Comité design',
    'Comité communication',
    'Comité logistique',
    'Comité délégations',
    'Comité XP conférenciers',
    'Autres comités',
];

const sortedCategories = Object.fromEntries(
    Object.entries(categories).sort((a, b) => sortOrder.indexOf(a[0]) - sortOrder.indexOf(b[0])),
);

const mapping = [
    {
        backgroundColor: '--red-DEFAULT',
        textColor: '--yellow-DEFAULT',
        icon: '',
    },
    {
        backgroundColor: '--gray-DEFAULT',
        textColor: '--pink-DEFAULT',
        icon: '',
    },
    {
        backgroundColor: '--yellow-DEFAULT',
        textColor: '--red-DEFAULT',
        icon: '',
    },
    {
        backgroundColor: '--teal-DEFAULT',
        textColor: '--gray-900',
        icon: '',
    },
    {
        backgroundColor: '--green-DEFAULT',
        textColor: '--teal-DEFAULT',
        icon: '',
    },
    {
        backgroundColor: '--orange-DEFAULT',
        textColor: '--yellow-DEFAULT',
        icon: '',
    },
    {
        backgroundColor: '--pink-DEFAULT',
        textColor: '--green-DEFAULT',
        icon: '',
    },
    {
        backgroundColor: '--blue-DEFAULT',
        textColor: '--orange-DEFAULT',
        icon: '',
    },
];
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="block">
        <h2 v-if="slice.primary.section_title" class="slice-title">
            <span>{{ slice.primary.section_title }}</span>
        </h2>
        <ul v-if="slice.primary.volunteers" class="volunteers-grid">
            <li v-for="(category, committee) in sortedCategories" :key="committee">
                <h3 v-if="Object.values(sortedCategories).length > 1">{{ t(committee) }}</h3>
                <ul class="volunteers-group">
                    <li v-for="(item, index) in category" :key="index" class="volunteer-item">
                        <Component
                            :is="item.volunteer.data.linkedin?.url ? 'a' : 'span'"
                            :href="item.volunteer.data.linkedin?.url"
                            :target="item.volunteer.data.linkedin?.url ? '_blank' : null"
                            class="volunteer-link"
                            :style="{
                                '--backgroundColor': `var(${mapping[index % 8].backgroundColor})`,
                                '--textColor': `var(${mapping[index % 8].textColor})`,
                            }"
                        >
                            <div class="volunteer-header">
                                <h4
                                    class="volunteer-name"
                                    v-html="item.volunteer.data.name.replace(' ', '<br />')"
                                ></h4>
                                <div v-if="item.volunteer.data.job" class="volunteer-job">
                                    {{ item.volunteer.data.job }}
                                </div>
                            </div>

                            <PrismicImage
                                v-if="item.volunteer.data.img"
                                class="volunteer-img"
                                :field="item.volunteer.data.img"
                            />
                            <div v-else class="shape-container">
                                <IconGlyph class="shape" />
                            </div>

                            <div class="profile-link">
                                <IconLinkedin class="icon-linkedin" />
                                <span>{{ t('Voir le profil') }}</span>
                                <IconExternal class="icon-external" />
                            </div>
                        </Component>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<style lang="postcss" scoped>
.block {
    margin: 64px 0;
    @media (--lg) {
        margin: 100px 0;
    }
}
.slice-title {
    font-size: rem(18px);
    font-weight: 700;
    padding: 24px 0;
    border-top: 1px solid var(--gray-900);
    border-bottom: 1px solid var(--gray-900);
    margin: 0;
    span {
        display: block;
        max-width: var(--page-container-max-width);
        padding: 0 16px;
        margin: 0 auto;
        width: 100%;
        @media (--md) {
            padding: 0 32px;
        }
    }
}
.volunteers-grid {
    max-width: var(--page-container-max-width);
    padding: 0 16px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
    @media (--md) {
        padding: 0 32px;
    }
    h3 {
        font-size: rem(18px);
        font-weight: 600;
        margin-bottom: 24px;
        text-transform: lowercase;
    }
}
.volunteers-group {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0;
    list-style: none;
    @media (min-width: 375px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (--md) {
        gap: 24px;
        grid-template-columns: repeat(3, 1fr);
    }
    @media (--lg) {
        grid-template-columns: repeat(4, 1fr);
    }
}
.volunteer-link {
    position: relative;
    z-index: 0;
    color: var(--gray-900);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray-900);
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition:
        color 300ms ease,
        background-color 300ms ease,
        border-color 300ms ease;
    &:is(a) {
        & {
            @media (--md-down) {
                background-color: var(--backgroundColor);
                color: var(--textColor);
                border-color: transparent;
                .shape-container,
                .volunteer-img {
                    transform: scale(0.5);
                    border-radius: 40px;
                }
            }
        }
        &:hover,
        &:focus-visible {
            background-color: var(--backgroundColor);
            color: var(--textColor);
            border-color: transparent;
            .shape-container,
            .volunteer-img {
                transform: scale(0.5);
                border-radius: 40px;
            }
        }
    }
}
.volunteer-header {
    padding: 10px;
    line-height: 1.25;
    flex-grow: 1;
    @media (--md) {
        padding: 16px;
    }
}
.volunteer-name {
    margin-bottom: 8px;
    text-transform: lowercase;
}
.volunteer-job {
    font-size: rem(12px);
}
.volunteer-img {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    transform-origin: 20px 0;
    transition:
        transform 300ms ease,
        border-radius 300ms ease;
    @media (--md) {
        transform-origin: 32px 0;
    }
}
.shape-container {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    background-color: var(--textColor);
    border-radius: 20px;
    overflow: hidden;
    transform-origin: 20px 0;
    transition:
        transform 300ms ease,
        border-radius 300ms ease;
    @media (--md) {
        transform-origin: 32px 0;
    }
}
.shape {
    width: 75%;
    color: var(--backgroundColor);
}
.profile-link {
    position: absolute;
    bottom: 16px;
    left: 10px;
    z-index: -1;
    color: var(--textColor);
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: rem(14px);
    @media (--md) {
        bottom: 16px;
        left: 16px;
    }
    .icon-linkedin {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    .icon-external {
        width: 12px;
        height: 12px;
        margin: 6px 0;
        margin-left: 4px;
    }
    span {
        text-decoration: underline;
        text-underline-offset: 4px;
        margin-top: -2px;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Voir le profil": "View profile",
        "Comité programmation": "Programming committee",
        "Comité web": "Web committee",
        "Comité design": "Design committee",
        "Comité communication": "Communication committee",
        "Comité logistique": "Logistic committee",
        "Comité délégations": "Delegations committee",
        "Comité XP conférenciers": "Speaker XP committee",
        "Autres comités": " Other committees"
    }
}
</i18n>
