<script setup lang="ts">
import IconStar from '@/assets/svg/shapes/star.svg?component';
import IconCheck from '@/assets/svg/shapes/check.svg?component';
import type { Content } from '@prismicio/client';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HomeTicketsSlice>(['slice', 'index', 'slices', 'context']));

const { t } = useI18n();
</script>

<template>
    <section class="block" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <h2 v-if="slice.primary.section_title" class="slice-title">
            <span>{{ slice.primary.section_title }}</span>
        </h2>
        <div class="ticket-types-wrapper">
            <div class="ticket-types">
                <div v-if="slice.primary.title" class="ticket-types-title-wrapper">
                    <h3 class="ticket-types-title">
                        {{ slice.primary.title }}
                    </h3>
                    <IconStar v-if="slice.primary.title" class="icon-star" />
                </div>
                <ul
                    class="ticket-types-list"
                    :class="{
                        'is-even': slice.primary.tickets.length % 2 === 0,
                        'is-odd': slice.primary.tickets.length % 2 === 1,
                    }"
                >
                    <li
                        v-for="item in slice.primary.tickets"
                        :key="item.ticket_type.uid"
                        class="ticket-type"
                        :style="{
                            '--backgroundColor': item.ticket_type.data.background_color,
                            '--textColor': item.ticket_type.data.text_color,
                        }"
                    >
                        <div class="top-section">
                            <h4 class="ticket-type-title">{{ item.ticket_type.data.name }}</h4>
                            <div class="ticket-type-price">{{ $n(item.ticket_type.data.price, 'currency') }}</div>
                            <a
                                v-if="item.ticket_type.data.link"
                                :href="item.ticket_type.data.link.url"
                                target="_blank"
                                class="ticket-type-link"
                            >
                                {{ t('Sélectionner') }}
                            </a>
                        </div>
                        <div class="bottom-section">
                            <h5 class="inclusion-title">{{ t('Inclusions') }}</h5>
                            <p class="inclusion-description">{{ t('Tout ce que comprend le billet') }}</p>
                            <ul class="inclusion-list">
                                <li
                                    v-for="inclusion in item.ticket_type.data.inclusions"
                                    :key="inclusion.item"
                                    class="inclusion-item"
                                >
                                    <IconCheck />
                                    {{ inclusion.item }}
                                </li>
                                <li>
                                    {{
                                        item.ticket_type.data.sharable
                                            ? t('Billet non-nominatif (peut être partagé)')
                                            : t('Billet nominatif (ne peut pas être partagé)')
                                    }}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <p v-if="slice.primary.terms" class="terms">
                    {{ slice.primary.terms }}
                </p>
            </div>
        </div>
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
.ticket-types-wrapper {
    margin: 40px auto;
    width: 100%;
    max-width: 1368px;
    padding: 0 16px;
    @media (--md) {
        padding: 0 32px;
    }
    @media (--lg) {
        margin: 64px auto;
    }
}
.ticket-types {
    background-color: var(--gray-900);
    color: var(--beige-100);
    padding: 48px 16px;
    border-radius: 40px;
    @media (--md) {
        padding: 48px 32px;
    }
    @media (--lg) {
        padding: 64px 48px;
    }
    .terms {
        font-size: rem(14px);
        text-align: center;
        max-width: 888px;
        margin: 0 auto;
        font-weight: 600;
        @media (--lg) {
            font-size: rem(16px);
        }
    }
}
.ticket-types-title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 48px;
    gap: 24px;
    @media (--lg) {
        gap: 40px;
        flex-direction: row;
        align-items: flex-end;
        margin-bottom: 64px;
    }
}
.ticket-types-title {
    font-size: rem(32px);
    font-weight: 600;
    max-width: 756px;
    margin: 0;
    @media (--lg) {
        font-size: rem(48px);
        padding-right: 56px;
    }
}
.icon-star {
    width: 40px;
    align-self: flex-end;
}
.ticket-types-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 48px;
    @media (--lg) {
        max-width: none;
        margin-bottom: 56px;
    }
    &.is-even {
        @media (--lg) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    &.is-odd {
        @media (--lg) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
.ticket-type {
    display: flex;
    flex-direction: column;
    color: var(--gray-900);
    text-align: center;
    .top-section,
    .bottom-section {
        padding: 32px;
        border-radius: 20px;
        background-color: var(--beige-100);
        transition: background-color var(--hover-transition);
    }
    .bottom-section {
        text-align: left;
        flex-grow: 1;
    }
    .ticket-type-title {
        line-height: 1.5;
        margin-bottom: 16px;
        font-weight: 600;
    }
    .ticket-type-price {
        font-size: rem(48px);
        font-weight: 700;
        @media (--lg) {
            font-size: rem(60px);
        }
    }
    .inclusion-title {
        margin: 0;
        line-height: 1.5;
        font-weight: 600;
    }
    .inclusion-description {
        font-weight: 500;
        line-height: 1.5;
        margin: 0;
        margin-bottom: 24px;
    }
    .inclusion-list {
        display: flex;
        list-style: none;
        flex-direction: column;
        gap: 16px;
        padding: 0;
    }
    .inclusion-item {
        display: flex;
        align-items: center;
        gap: 12px;
        svg {
            width: 16px;
            flex-shrink: 0;
        }
    }
    &:has(.ticket-type-link:hover, .ticket-type-link:focus-visible) {
        .top-section,
        .bottom-section {
            color: var(--textColor);
            background-color: var(--backgroundColor);
        }
    }
}
.ticket-type-link {
    display: block;
    font-size: rem(14px);
    line-height: 1.25;
    color: var(--gray-900);
    background-color: transparent;
    border-radius: 6px;
    padding: 8px;
    line-height: 1.5;
    cursor: pointer;
    border: 2px solid transparent;
    text-decoration: none;
    background-color: var(--gray-900);
    color: var(--beige-100);
    text-transform: lowercase;
    width: 100%;
    margin-top: 32px;
    @media (--lg) {
        font-size: rem(16px);
        padding: 10px 12px;
    }
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition),
        border-style var(--hover-transition),
        border-color var(--hover-transition);
    &:hover,
    &:focus-visible {
        background-color: transparent;
        color: var(--textColor);
        border-color: var(--textColor);
        border-style: dashed;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Sélectionner": "Select",
        "Inclusions": "Inclusions",
        "Tout ce que comprend le billet": "Everything included with the ticket",
        "Billet nominatif (ne peut pas être partagé)": "Nominative ticket (cannot be shared)",
        "Billet non-nominatif (peut être partagé)": "Non-nominative ticket (can be shared)"
    }
}
</i18n>
