<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import LogoInterface from '@/assets/svg/logo-with-glyph.svg?component';

import IconExternal from '@/assets/svg/external.svg?component';
import IconTickets from '@/assets/svg/tickets.svg?component';

const { t } = useI18n();
const isOpen = ref(false);
const isAnimating = ref(false);
const maxHeight = ref('0px');
const menu = useTemplateRef<HTMLElement>('menu');
const menuList = useTemplateRef('menuList');
const items = computed(() => [
    {
        label: t('Accueil'),
        path: 'index',
        color: 'yellow-DEFAULT',
    },
    {
        label: t('Billetterie'),
        path: 'tickets',
        color: 'pink-DEFAULT',
    },
    {
        label: t('Programmation'),
        path: 'schedule',
        color: 'red-DEFAULT',
    },
    {
        label: t('Partenaires'),
        path: 'partners',
        color: 'green-DEFAULT',
    },
    // {
    //     label: t('Participer'),
    //     path: 'participate',
    //     color: 'green-DEFAULT',
    // },
    // {
    //     label: t('Médiathèque'),
    //     path: 'media-library',
    //     color: 'teal-DEFAULT',
    // },
    {
        label: t('Boutique'),
        path: 'https://boutique.interfaceqc.com/',
        color: 'orange-DEFAULT',
    },
    {
        label: t('À propos'),
        path: 'about-us',
        color: 'teal-DEFAULT',
    },
    // {
    //     label: t('Contact'),
    //     path: 'contact-us',
    //     color: 'orange-DEFAULT',
    // },
    {
        label: t('Faq'),
        path: 'faq',
        color: 'blue-DEFAULT',
    },
]);

const { activate, deactivate } = useFocusTrap(menu);
watch(isOpen, (value) => {
    if (value) {
        activate();
    } else {
        deactivate();
    }
});

const route = useRoute();
watch(route, () => {
    isOpen.value = false;
});

const onEnter = () => {
    const { height } = useElementSize(menuList);
    isAnimating.value = true;
    maxHeight.value = `${height.value}px`;
};

const onEscape = () => {
    isOpen.value = false;
};
</script>

<template>
    <header ref="menu" class="header" :class="{ 'is-open': isAnimating }">
        <OnClickOutside class="menu-wrapper" @keydown.esc="onEscape" @trigger="isOpen = false">
            <div class="logo-wrapper">
                <button class="btn-menu" type="button" :class="{ 'is-open': isOpen }" @click="isOpen = !isOpen">
                    <span class="sr-only">{{ t('Menu') }}</span>
                </button>
                <NuxtLinkLocale to="index" class="logo-interface">
                    <span class="sr-only">{{ t('Retour à l’accueil') }}</span>
                    <LogoInterface />
                </NuxtLinkLocale>
            </div>
            <Transition name="collapse" @enter="onEnter" @after-leave="isAnimating = false">
                <nav v-show="isOpen" class="menu-inner">
                    <ul ref="menuList" class="menu-list">
                        <li v-for="item in items" :key="item.label" class="menu-item">
                            <NuxtLinkLocale :to="item.path" class="menu-link">
                                {{ item.label }}
                                <IconExternal v-if="item.path.startsWith('https://')" class="icon-external" />
                            </NuxtLinkLocale>
                        </li>
                        <li class="menu-item">
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </nav>
            </Transition>
        </OnClickOutside>
        <PrimaryButton :to="$config.public.ticketing_url" target="_blank" class="btn-cta">
            <IconTickets />
            <span>{{ t('Acheter mon billet') }}</span>
            <span>{{ t('Billets') }}</span>
        </PrimaryButton>
    </header>
</template>

<style lang="postcss" scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 32px 0;
    gap: 40px;
    /* max-width: var(--page-container-max-width); */
    /* margin: 0 auto; */
}
.menu-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 40px;
    padding: 12px 0;
    border-radius: 12px;
    background-color: var(--color-white);
}
.logo-wrapper {
    display: flex;
    align-items: center;
}
.logo-interface {
    padding: 0 32px;
    text-decoration: none;
    color: var(--gray-900);
    svg {
        height: 27px;
    }
}
.btn-menu {
    position: relative;
    background: transparent;
    width: 22px;
    height: 24px;
    box-sizing: content-box;
    padding: 20px;
    margin: 0;
    color: var(--gray-900);
    border: 0;
    appearance: none;
    margin: -12px 0;
    margin-right: -20px;
    &::before,
    &::after {
        content: '';
        display: block;
        height: 2px;
        border-radius: calc(Infinity * 1px);
        width: 22px;
        background: currentColor;
        transition: all 150ms ease;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50%;
        rotate: 0;
    }
    &::before {
        margin-top: -4px;
    }
    &::after {
        margin-top: 4px;
    }
    &.is-open {
        translate: 4px;
        @media (--md) {
            translate: 0;
        }
        &::before,
        &::after {
            margin: 0;
            width: 24px;
        }
        &::before {
            rotate: 45deg;
        }
        &::after {
            rotate: -45deg;
        }
    }
}
.primary-button.btn-cta {
    margin-left: auto;
    svg {
        margin: -2px 0;
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
.menu-inner {
    max-height: v-bind(maxHeight);
    overflow: hidden;
}
.menu-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    padding: 16px 20px 0;
    list-style: none;
}
.menu-item {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
    .is-open & {
        &:nth-child(1) {
            opacity: 1;
        }
        &:nth-child(2) {
            opacity: 1;
            transition-delay: 100ms;
        }
        &:nth-child(3) {
            opacity: 1;
            transition-delay: 200ms;
        }
        &:nth-child(4) {
            opacity: 1;
            transition-delay: 300ms;
        }
        &:nth-child(5) {
            opacity: 1;
            transition-delay: 400ms;
        }
        &:nth-child(6) {
            opacity: 1;
            transition-delay: 500ms;
        }
        &:nth-child(7) {
            opacity: 1;
            transition-delay: 600ms;
        }
        &:nth-child(8) {
            opacity: 1;
            transition-delay: 700ms;
        }
        &:nth-child(9) {
            opacity: 1;
            transition-delay: 800ms;
        }
        &:nth-child(10) {
            opacity: 1;
            transition-delay: 900ms;
        }
    }
    .icon-external {
        width: 12px;
        height: 12px;
    }
}
.menu-link {
    position: relative;
    display: block;
    font-size: rem(16px);
    line-height: 1.5;
    text-decoration: none;
    color: var(--gray-900);
    font-weight: 500;
    text-transform: lowercase;
    transition: all 300ms ease;
    padding: 8px 12px;
    border-radius: 6px;
    &.router-link-active {
        font-family: var(--font-secondary);
    }
    &:hover,
    &:focus-visible {
        font-family: var(--font-secondary);
        background-color: var(--color-secondary);
    }
}
.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 500ms ease;
}
.collapse-enter-from,
.collapse-leave-to {
    max-height: 0px;
}
</style>

<i18n lang="json">
{
    "en": {
        "Menu": "Menu",
        "Acheter mon billet": "Buy my ticket",
        "Billets": "tickets",
        "Retour à l’accueil": "Back to homepage",
        "Accueil": "Home",
        "Billetterie": "Tickets",
        "Programmation": "Schedule",
        "Partenaires": "Partners",
        "Participer": "Participate",
        "Médiathèque": "media Library",
        "À propos": "About Us",
        "Contact": "Contact",
        "Faq": "Faq",
        "Boutique": "Shop"
    }
}
</i18n>
