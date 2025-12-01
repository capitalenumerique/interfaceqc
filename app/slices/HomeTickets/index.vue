<script setup lang="ts">
import type { Content } from '@prismicio/client';

import IconStar from '@/assets/svg/shapes/star.svg?component';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HomeTicketsSlice>(['slice', 'index', 'slices', 'context']));
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
                    <TicketType v-for="(item, i) in slice.primary.tickets" :key="i" :item="item" />
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 0;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 48px;
    @media (--lg) {
        flex-direction: row;
        flex-wrap: wrap;
        max-width: none;
        margin-bottom: 56px;
    }
}
</style>
