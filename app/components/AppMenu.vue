<template>
    <OnClickOutside
        ref="menu"
        class="menu"
        :class="{ 'menu-opened': isAnimating }"
        @keydown.esc="onEscape"
        @trigger="isOpen = false"
    >
        <div class="menu-wrapper">
            <div class="logo-wrapper">
                <button class="btn-menu" type="button" :class="{ 'is-open': isOpen }" @click="isOpen = !isOpen">
                    <span class="sr-only">{{ t('Menu') }}</span>
                </button>
                <NuxtLinkLocale to="index" class="logo-link">
                    <span class="sr-only">{{ t('Retour à l’accueil') }}</span>
                    <LogoInterface class="logo-interface" />
                </NuxtLinkLocale>
            </div>
            <NuxtLinkLocale to="index" class="logo-interface-vertical">
                <LogoInterfaceVertical />
            </NuxtLinkLocale>
        </div>
        <Transition name="collapse" @enter="onEnter" @after-leave="isAnimating = false">
            <nav v-show="isOpen" class="menu-inner">
                <ul ref="menuList" class="menu-list">
                    <li v-for="item in items" :key="item.label" class="menu-item">
                        <NuxtLinkLocale :to="item.path" class="menu-link">
                            <Component :is="item.icon" :style="`fill: var(--${item.color})`" class="menu-icon" />
                            {{ item.label }}
                        </NuxtLinkLocale>
                    </li>
                    <li class="menu-item">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>
        </Transition>
    </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import LogoInterface from '@/assets/svg/logo.svg?component';
import LogoInterfaceVertical from '@/assets/svg/logo-with-glyph-vertical.svg?component';

// import IconLemon from '@/assets/svg/shapes/lemon.svg?component';
import IconStar from '@/assets/svg/shapes/star.svg?component';
import IconSemiCircle from '@/assets/svg/shapes/semi-circle.svg?component';
// import IconAsterix from '@/assets/svg/shapes/asterisk.svg?component?component';
// import IconTriangle from '@/assets/svg/shapes/triangle.svg?component';
import IconGlyph from '@/assets/svg/shapes/glyph.svg?component';
// import IconHexagon from '@/assets/svg/shapes/hexagon.svg?component';
import IconCircle from '@/assets/svg/shapes/circle.svg?component';

const { t } = useI18n();
const isOpen = ref(false);
const isAnimating = ref(false);
const maxHeight = ref('0px');
const menu = useTemplateRef('menu');
const menuList = useTemplateRef('menuList');
const items = computed(() => [
    {
        label: t('Accueil'),
        path: 'index',
        icon: IconGlyph,
        color: 'yellow-200',
    },
    {
        label: t('Billetterie'),
        path: 'tickets',
        icon: IconStar,
        color: 'pink-300',
    },
    {
        label: t('Programmation'),
        path: 'schedule',
        icon: IconSemiCircle,
        color: 'red-500',
    },
    // {
    //     label: t('Participer'),
    //     path: 'participate',
    //     icon: IconAsterix,
    //     color: 'green-700',
    // },
    // {
    //     label: t('Médiathèque'),
    //     path: 'media-library',
    //     icon: IconTriangle,
    //     color: 'teal-500',
    // },
    // {
    //     label: t('À propos'),
    //     path: 'about-us',
    //     icon: IconGlyph,
    //     color: 'yellow-200',
    // },
    // {
    //     label: t('Contact'),
    //     path: 'contact-us',
    //     icon: IconHexagon,
    //     color: 'orange-400',
    // },
    {
        label: t('Faq'),
        path: 'faq',
        icon: IconCircle,
        color: 'blue-700',
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

<style lang="postcss" scoped>
.menu {
    position: fixed;
    top: 0;
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--gray-900);
    transition: background 500ms ease;
    background-color: var(--beige-100);
    z-index: 10;
    @media (--md) {
        position: sticky;
        flex-direction: row;
        right: auto;
        bottom: 0;
        border-right: 1px solid var(--gray-900);
        border-bottom: 0;
    }
    &.menu-opened,
    &:hover {
        background-color: var(--beige-100);
    }
}
.menu-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 32px;
    height: 72px;
    @media (--md) {
        height: auto;
        flex-direction: column;
        padding: 32px 0;
        width: 68px;
        flex-shrink: 0;
    }
}
.menu-inner {
    background-color: var(--beige-100);
    max-height: v-bind(maxHeight);
    overflow: hidden;
    @media (--md) {
        position: absolute;
        left: 100%;
        overflow-y: auto;
        width: 300px;
        max-width: 300px;
        will-change: auto;
        top: 0;
        bottom: 0;
        max-height: none;
        border-right: 1px solid var(--gray-900);
    }
}
.menu-list {
    padding: 10px 28px 32px;
    white-space: nowrap;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    margin: -12px 0;
    @media (--md) {
        padding: 32px 28px;
    }
}
.menu-item {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
    .menu-opened & {
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
}
.menu-link {
    position: relative;
    display: block;
    font-size: rem(24px);
    text-decoration: none;
    color: var(--gray-900);
    font-weight: 500;
    text-transform: lowercase;
    transition: padding 300ms ease;
    padding: 12px 0;
    .menu-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        opacity: 0;
        transition: all 300ms ease;
        transition-delay: 0ms;
        width: 16px;
        height: 16px;
        color: var(--green-700);
        translate: -100%;
    }
    &.router-link-exact-active,
    &:hover {
        font-weight: 600;
        padding-left: 24px;
        .menu-icon {
            opacity: 1;
            translate: 0;
        }
    }
}
.logo-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (--md) {
        flex-direction: column;
        gap: 50px;
    }
}
.logo-link {
    text-decoration: none;
    color: var(--gray-900);
}
.logo-interface {
    height: 24px;
    @media (--md) {
        display: none;
    }
}
.logo-interface-vertical {
    display: none;
    @media (--md) {
        display: block;
        width: 32px;
        color: var(--gray-900);
    }
}
.icon-glyph {
    width: 26px;
    height: 26px;
}
.btn-menu {
    position: relative;
    background: transparent;
    width: 24px;
    height: 24px;
    box-sizing: content-box;
    padding: 12px;
    margin: 0;
    color: var(--gray-900);
    border: 0;
    appearance: none;
    margin-left: -41px;
    @media (--md) {
        margin: -12px;
    }
    &::before,
    &::after {
        content: '';
        display: block;
        height: 1px;
        width: 32px;
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
            @media (--md) {
                width: 32px;
            }
        }
        &::before {
            rotate: 45deg;
        }
        &::after {
            rotate: -45deg;
        }
    }
}
.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 500ms ease;
    @media (--md) {
        transition: max-width 500ms ease;
    }
}
.collapse-enter-from,
.collapse-leave-to {
    max-height: 0px;
    @media (--md) {
        max-height: none;
        max-width: 0px;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Menu": "Menu",
        "Retour à l’accueil": "Back to homepage",
        "Accueil": "Home",
        "Billetterie": "Tickets",
        "Programmation": "Schedule",
        "Participer": "Participate",
        "Médiathèque": "media Library",
        "À propos": "About",
        "Contact": "Contact",
        "Faq": "Faq"
    }
}
</i18n>
