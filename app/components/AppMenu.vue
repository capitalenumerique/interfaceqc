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
                    <span class="sr-only">Menu</span>
                </button>
                <NuxtLinkLocale to="index" class="logo-link">
                    <span class="sr-only">interface</span>
                    <IconInterfaceH class="icon-interface-h" />
                    <IconInterfaceV class="icon-interface-v" />
                </NuxtLinkLocale>
            </div>
            <IconStar class="icon-star" />
        </div>
        <Transition name="collapse" @enter="onEnter" @after-leave="isAnimating = false">
            <nav v-show="isOpen" class="menu-inner">
                <ul ref="menuList" class="menu-list">
                    <li v-for="item in items" :key="item" class="menu-item">
                        <!-- TODO: Change link -->
                        <NuxtLinkLocale to="/404" class="menu-link">
                            <IconDiamond class="icon-diamond" />
                            {{ item }}
                        </NuxtLinkLocale>
                    </li>
                </ul>
            </nav>
        </Transition>
    </OnClickOutside>
</template>

<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import IconInterfaceH from '@/assets/svg/interface-logo.svg?component';
import IconInterfaceV from '@/assets/svg/interface-logo-v.svg?component';
import IconStar from '@/assets/svg/star.svg?component';
import IconDiamond from '@/assets/svg/diamond.svg?component';

const isOpen = ref(false);
const isAnimating = ref(false);
const maxHeight = ref('0px');
const menu = useTemplateRef('menu');
const menuList = useTemplateRef('menuList');
const items = ref(['billetterie', 'programmation', 'participer', 'médiathèque', 'à propos', 'contact', 'faq']);

const { activate, deactivate } = useFocusTrap(menu);
watch(isOpen, (value) => {
    if (value) {
        activate();
    } else {
        deactivate();
    }
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
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-bottom: 1px solid #333230;
    transition: background 500ms ease;
    background-color: var(--beige-100);
    z-index: 10;
    @media (--md) {
        flex-direction: row;
        right: auto;
        bottom: 0;
        border-right: 1px solid #333230;
        border-bottom: 0;
        background: none;
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
    height: 80px;
    @media (--md) {
        height: auto;
        flex-direction: column;
        padding: 32px 0;
        width: 68px;
        flex-shrink: 0;
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
.icon-interface-h {
    height: 24px;
    @media (--md) {
        display: none;
    }
}
.icon-interface-v {
    display: none;
    @media (--md) {
        display: block;
        width: 32px;
    }
}
.icon-star {
    width: 26px;
    height: 26px;
}
.btn-menu {
    position: relative;
    background: transparent;
    width: 50px;
    height: 50px;
    padding: 0;
    margin: 0;
    color: var(--gray-900);
    border: 0;
    appearance: none;
    margin-left: -41px;
    @media (--md) {
        margin-left: 0;
        margin-top: -20px;
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
        rotate: 0deg;
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
.menu-inner {
    max-height: 0;
    max-height: v-bind(maxHeight);
    @media (--md) {
        overflow-y: auto;
        width: 300px;
        max-width: 300px;
        will-change: auto;
    }
}
.menu-list {
    padding: 32px 28px;
    white-space: nowrap;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (--md) {
        padding: calc(32px - 20px + 50px + 50px) 28px 32px;
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
    display: inline-block;
    font-size: 24px;
    text-decoration: none;
    color: var(--gray-900);
    font-weight: 500;
    transition: padding 300ms ease;
    .icon-diamond {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        opacity: 0;
        transition: opacity 150ms ease;
        transition-delay: 0ms;
        width: 16px;
        height: 16px;
        color: var(--green-700);
    }
    &.router-link-exact-active,
    &:hover {
        font-weight: 600;
        padding-left: 24px;
        .icon-diamond {
            opacity: 1;
            transition: opacity 300ms ease 150ms;
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
.collapse-leave-active {
    max-height: 0px;
    @media (--md) {
        max-width: 0px;
    }
}
</style>
