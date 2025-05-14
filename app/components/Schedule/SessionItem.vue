<template>
    <div class="session-wrapper" :class="{ 'has-details': hasDetails }" :style="hoverColors">
        <div>
            <h2 class="session-title">
                <NuxtLinkLocale
                    v-if="hasDetails"
                    :to="{ name: 'session-id', params: { id: `${sessionSlug}-${session.id}` } }"
                    class="session-link"
                >
                    {{ session.title }}
                </NuxtLinkLocale>
                <template v-else>{{ session.title }}</template>
            </h2>
            <ul v-if="hasDetails" class="speakers-list">
                <li v-for="(speaker, i) in session.speakers" :key="`speaker-${session.id}-${i}`" class="speaker-item">
                    <p class="speaker-name">{{ speaker.firstName }} {{ speaker.lastName }}</p>
                    <p class="speaker-organization">{{ speaker.organization }}</p>
                </li>
            </ul>
            <span class="session-time">{{
                t('{start} à {end}', {
                    start: formatSessionTime(session.beginsAt),
                    end: formatSessionTime(session.endsAt),
                })
            }}</span>
        </div>
        <ScheduleSessionCategories :list-id="session.id" :categories="session.categories" :hover-colors="hoverColors" />
    </div>
</template>

<script setup>
const props = defineProps({
    session: {
        type: Object,
        required: true,
    },
});

const { t } = useI18n();
const { formatSessionTime } = useTimeFormatter();
const sessionSlug = useSlug(props.session.title);

const hasDetails = computed(() => props.session.speakers.every((s) => s.id !== 'RXZlbnRQZW9wbGVfMzgyMTc4NjI='));

const hoverColors = computed(() => {
    const colors = props.session.categories?.[0]?.colors || { bg: 'var(--red-600)', text: 'var(--yellow-200)' };
    return {
        '--hover-text': colors.text,
        '--hover-bg': colors.bg,
    };
});
</script>

<style lang="postcss" scoped>
.session-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 24px;
    transition:
        background-color var(--hover-transition),
        color var(--hover-transition);
    &.has-details:hover,
    &.has-details:focus-visible {
        background-color: var(--hover-bg);
        color: var(--hover-text);
        :deep(.category-item) {
            background-color: var(--hover-bg);
            color: var(--hover-text);
        }
    }
}
.session-title {
    font-size: rem(20px);
    font-weight: 600;
    margin-bottom: 16px;
    max-width: 250px;
}
.session-link {
    font-size: rem(20px);
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
.session-time {
    display: inline-block;
    font-size: rem(14px);
    padding: 8px;
    border-radius: 6px;
    font-weight: 700;
    border: 1px solid currentColor;
    margin-bottom: 8px;
}
.speakers-list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.speaker-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.speaker-name {
    font-size: rem(14px);
    font-weight: 700;
    margin: 0;
}
.speaker-organization {
    font-size: rem(14px);
    margin: 0;
}
</style>

<i18n lang="json">
{
    "en": {
        "{start} à {end}": "{start} to {end}"
    }
}
</i18n>
