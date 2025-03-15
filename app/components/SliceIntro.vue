<template>
    <div class="intro">
        <h2 class="intro-title">
            <slot name="title" />
        </h2>
        <div class="intro-content">
            <div class="wysiwyg">
                <slot name="wysiwyg" />
            </div>
            <slot name="cta" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.intro {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    padding: 0 16px;
    gap: 24px 32px;
    margin-bottom: 64px;
    @media (--lg) {
        flex-direction: row;
    }
}
.intro-title {
    font-size: rem(32px);
    font-weight: 600;
    max-width: 430px;
    flex-shrink: 0;
    margin: 0;
    text-transform: lowercase;
    @media (--lg) {
        font-size: rem(48px);
    }
}
.intro-content {
    display: flex;
    flex-direction: column;
    font-size: rem(16px);
    line-height: 1.777;
    gap: 40px;
    @media (--lg) {
        font-size: rem(18px);
        align-items: flex-start;
        max-width: 668px;
    }
    .wysiwyg {
        margin-left: 40px;
        @media (--lg) {
            margin-left: 0px;
        }
    }
    .primary-button {
        text-transform: lowercase;
    }
}
</style>
