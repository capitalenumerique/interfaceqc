<script lang="ts" setup>
import type { Content } from '@prismicio/client';

import IconCheck from '@/assets/svg/shapes/check.svg?component';
import IconPlus from '@/assets/svg/plus.svg?component';
import IconMinus from '@/assets/svg/minus.svg?component';

defineProps<{
    item: Content.HomeTicketsSliceDefaultPrimaryTicketsItem;
}>();

const triggerId = useId();
const contentId = useId();
const isOpen = ref(false);

const { t } = useI18n();
</script>

<template>
    <li
        v-if="$prismic.isFilled.contentRelationship(item.ticket_type)"
        class="ticket-type"
        :class="{ 'is-open': isOpen }"
        :style="{
            '--backgroundColor': item.ticket_type.data?.background_color ?? '',
            '--textColor': item.ticket_type.data?.text_color ?? '',
        }"
    >
        <div class="top-section">
            <h4 class="ticket-type-title">{{ item.ticket_type.data?.name }}</h4>
            <div class="ticket-type-price">
                {{ $n(item.ticket_type.data?.price || 0, 'currency') }}
            </div>
            <a
                v-if="$prismic.isFilled.link(item.ticket_type.data?.link)"
                :href="item.ticket_type.data?.link.url"
                target="_blank"
                class="ticket-type-link"
            >
                {{ t('Sélectionner') }}
            </a>
        </div>
        <TransitionExpand>
            <div v-show="isOpen" :id="contentId" :aria-labelledby="triggerId" class="animation-wrapper">
                <div class="bottom-section">
                    <h5 class="inclusion-title">{{ t('Inclusions') }}</h5>
                    <p class="inclusion-description">{{ t('Tout ce que comprend le billet') }}</p>
                    <ul class="inclusion-list">
                        <li v-for="(inclusion, j) in item.ticket_type.data?.inclusions" :key="j" class="inclusion-item">
                            <IconCheck />
                            {{ inclusion.item }}
                        </li>
                        <li>
                            {{
                                item.ticket_type.data?.sharable
                                    ? t('Billet non-nominatif (peut être partagé)')
                                    : t('Billet nominatif (ne peut pas être partagé)')
                            }}
                        </li>
                    </ul>
                </div>
            </div>
        </TransitionExpand>
        <button
            :id="triggerId"
            :aria-expanded="isOpen"
            :aria-controls="contentId"
            class="accordion-trigger"
            @click="isOpen = !isOpen"
        >
            {{ t('Consulter les détails') }}
            <IconPlus v-if="!isOpen" />
            <IconMinus v-else />
        </button>
    </li>
</template>

<style lang="postcss" scoped>
.ticket-type {
    display: flex;
    flex-direction: column;
    color: var(--gray-900);
    text-align: center;
    .top-section,
    .bottom-section {
        padding: 32px;
        border-radius: 20px 20px 0 0;
        background-color: var(--beige-100);
        transition:
            color var(--hover-transition),
            background-color var(--hover-transition),
            border-radius var(--hover-transition);
        @media (--lg) {
            border-radius: 20px;
        }
    }
    .top-section {
        .is-open & {
            border-radius: 20px;
        }
    }
    .bottom-section {
        text-align: left;
        flex-grow: 1;
        height: 100%;
    }
    .ticket-type-title {
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
        font-size: rem(16px);
        margin: 0;
        font-weight: 600;
        margin-bottom: 4px;
    }
    .inclusion-description {
        font-weight: 500;
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
        .bottom-section,
        .accordion-trigger {
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
.accordion-trigger {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    font-size: rem(18px);
    line-height: 1.25;
    font-weight: 600;
    padding: 16px;
    border-radius: 0 0 16px 16px;
    width: 100%;
    text-align: left;
    appearance: none;
    color: var(--gray-900);
    background-color: var(--beige-100);
    cursor: pointer;
    border: 0;
    border-top: 1px solid var(--gray-900);
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition),
        border-style var(--hover-transition),
        border-color var(--hover-transition);
    @media (--lg) {
        display: none;
    }
    svg {
        width: 32px;
        flex-shrink: 0;
        @media (--lg) {
            width: 40px;
        }
    }
}
.animation-wrapper {
    flex-grow: 1;
    @media (--lg) {
        display: block !important;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Consulter les détails": "View details",
        "Sélectionner": "Select",
        "Inclusions": "Inclusions",
        "Tout ce que comprend le billet": "Everything included with the ticket",
        "Billet nominatif (ne peut pas être partagé)": "Nominative ticket (cannot be shared)",
        "Billet non-nominatif (peut être partagé)": "Non-nominative ticket (can be shared)"
    }
}
</i18n>
