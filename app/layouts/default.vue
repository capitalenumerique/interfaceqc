<template>
    <div class="layout-wrapper">
        <div class="page-wrapper">
            <AppMenu />
            <PrimaryButton to="https://ti.to/cnum/interface-2025" target="_blank" class="cta">
                <!-- TODO: Update icon for a ticket ? -->
                <IconStarOutline class="icon-star-outline" />
                {{ t('Billeterie') }}
                <!-- {{ t('Acheter') }}
                <span>{{ t('mon billet') }}</span> -->
            </PrimaryButton>
            <main class="content-wrapper">
                <slot />
            </main>
        </div>
        <AppFooter />
    </div>
</template>

<script lang="ts" setup>
import IconStarOutline from '@/assets/svg/star-outline.svg?component';
const { t } = useI18n();
</script>

<style lang="postcss" scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.page-wrapper {
    position: relative;
    flex-grow: 1;
    margin-top: 72px;
    z-index: 10;
    background: var(--beige-100);
    @media (--md) {
        display: grid;
        grid-template-columns: 68px 1fr;
        margin-top: 0;
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
    min-width: 0;
}
.primary-button.cta {
    display: flex;
    gap: 6px;
    position: fixed;
    top: 17px;
    right: 16px;
    z-index: 50;
    padding: 8px 12px;
    border-radius: 8px;
    text-transform: lowercase;
    @media (--md) {
        position: absolute;
        top: 64px;
        padding: 14px 18px;
    }
    @media (--xl) {
        right: 64px;
    }
    .icon-star-outline {
        width: 20px;
    }
}
/* .cta {
    span {
        display: none;
        @media (min-width: 375px) {
            display: inline;
        }
    }
} */
</style>

<i18n lang="json">
{
    "en": {
        "Billeterie": "Tickets",
        "Acheter": "Buy",
        "mon billet": "my ticket"
    }
}
</i18n>
