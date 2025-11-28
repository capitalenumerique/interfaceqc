<script lang="ts" setup>
import IconTickets from '@/assets/svg/tickets.svg?component';
const { t } = useI18n();
</script>

<template>
    <div class="layout-wrapper">
        <div class="page-wrapper">
            <AppMenu />
            <main class="content-wrapper">
                <PrimaryButton :to="$config.public.ticketing_url" target="_blank" class="btn-cta">
                    <IconTickets />
                    <span>{{ t('Acheter mon billet') }}</span>
                    <span>{{ t('Billets') }}</span>
                </PrimaryButton>
                <slot />
            </main>
        </div>
        <AppFooter />
    </div>
</template>

<style lang="postcss" scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.page-wrapper {
    position: relative;
    flex-grow: 1;
    z-index: 10;
    background: var(--beige-100);
    @media (--md) {
        display: grid;
        grid-template-columns: 68px 1fr;
        margin-top: 0;
        transform: translate3d(0, 0, 0);
    }
    &::before,
    &::after {
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 100%;
        background: var(--beige-100);
        z-index: 10;
    }
    &::before {
        left: 0;
        clip-path: path('M50,0 C22.6619049,0 0.448238098,21.9402858 0.00669857147,49.1731586 L0,50 L0,0 L50,0 Z');
    }
    &::after {
        right: 0;
        clip-path: path('M0,0 C27.3380951,0 49.5517619,21.9402858 49.9933014,49.1731586 L50,50 L50,0 L0,0 Z');
    }
}
.content-wrapper {
    position: relative;
    min-width: 0;
}
.primary-button.btn-cta {
    display: flex;
    gap: 8px;
    position: absolute;
    right: 32px;
    top: 32px;
    z-index: 50;
    padding: 8px 12px;
    border-radius: 8px;
    text-transform: lowercase;
    @media (--md-down) {
        display: none;
    }
    @media (--lg) {
        padding: 16px 18px;
        top: 64px;
    }
    @media (--xl) {
        right: 64px;
    }
    svg {
        margin: -3px 0;
        width: 22px;
    }
    span {
        &:first-of-type {
            display: none;
            @media (min-width: 390px) {
                display: inline;
            }
        }
        &:last-of-type {
            display: inline;
            @media (min-width: 390px) {
                display: none;
            }
        }
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Acheter mon billet": "Buy my ticket",
        "Billets": "tickets"
    }
}
</i18n>
