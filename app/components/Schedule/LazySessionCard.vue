<template>
    <div class="session-wrapper">
        <div class="session-header line large"></div>
        <div class="session-title line-title"></div>
        <div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line small"></div>
        </div>
        <div class="session-place line large"></div>
        <ul class="tags">
            <li class="tag small"></li>
            <li class="tag"></li>
            <li class="tag large"></li>
        </ul>
        <div class="speaker-wrapper">
            <div class="speaker-photo"></div>
            <div class="speaker-bio">
                <div class="line"></div>
                <div class="line"></div>
                <div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line small"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.line,
.line-title,
.tag,
.speaker-photo {
    animation: hintloading 1s ease-in-out 0s infinite reverse;
    &.small {
        width: 100px;
    }
    &.large {
        width: 200px;
    }
}
.line,
.line-title {
    background-color: var(--beige-200);
    height: 16px;
    width: 100%;
    margin-bottom: 8px;
    &.session-header {
        margin-bottom: 24px;
    }
    &.session-title {
        margin-bottom: 20px;
    }
    &.session-place {
        margin: 24px 0;
    }
}
.speaker-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 48px;
    @media (--lg) {
        flex-direction: row;
    }
}
.speaker-photo {
    width: 128px;
    height: 128px;
    border-radius: 8px;
    background-color: var(--beige-200);
}
.speaker-bio {
    flex-grow: 1;
}
.line-title {
    height: 24px;
}
.tags {
    display: flex;
    gap: 8px;
    list-style: none;
    flex-wrap: wrap;
    margin: 16px 0 0;
    padding: 0;
}
.tag {
    height: 32px;
    width: 120px;
    background-color: var(--beige-200);
    border-radius: 6px;
}
@keyframes hintloading {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
}
</style>
