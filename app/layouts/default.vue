<template>
    <div class="layout-wrapper">
        <AppMenu />
        <div class="page-wrapper">
            <AppHeader />
            <div class="content-wrapper">
                <slot />
            </div>
            <AppFooter />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.layout-wrapper {
    min-height: 100vh;
}
.page-wrapper {
    flex-grow: 1;
    margin-top: 80px;
    @media (--md) {
        margin-top: 0;
        margin-left: 68px;
    }
}
</style>
