<script lang="ts" setup>
import IconArrow from '@/assets/svg/external.svg?component';
import IconPeople from '@/assets/svg/people.svg?component';

const { session } = defineProps<{
    session: Session;
}>();

const { t } = useI18n();
const { formatSessionTime } = useTimeFormatter();
const sessionSlug = useSlug(session.title);

const hasDetails = computed(() => {
    return (
        session.speakers.length &&
        session.speakers.every(
            (s: { id: string }) =>
                s.id !== 'U3BlYWtlcihFdmVudF8zOTQwNTQwLEV2ZW50UGVvcGxlXzQzNDAzNzQ2LFVzZXJfMjA1ODQ0MDAp',
        )
    );
});

const hoverColors = computed(() => {
    const colors = session.categories?.[0]?.colors || {
        bg: 'var(--orange-800)',
        text: 'var(--purple-100)',
    };
    return {
        '--hover-text': colors.text,
        '--hover-bg': colors.bg,
    };
});
</script>

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
            <template v-if="hasDetails">
                <ul v-if="session.type === 'Podcast'" class="speakers-list">
                    <li
                        v-for="(speaker, i) in session.speakers.slice(0, 2)"
                        :key="`speaker-${session.id}-${i}`"
                        class="speaker-item"
                    >
                        <div class="speaker-photo">
                            <NuxtImg
                                v-if="speaker.photoUrl"
                                :src="speaker.photoUrl"
                                :alt="`${speaker.firstName} ${speaker.lastName}`"
                                width="40"
                                height="40"
                                format="webp"
                            />
                            <NuxtImg
                                v-else
                                :src="`https://ui-avatars.com/api/?name=${speaker.firstName}+${speaker.lastName}&background=e2d5c6&color=593e35&bold=true&format=svg`"
                                :alt="`${speaker.firstName} ${speaker.lastName}`"
                                width="40"
                                height="40"
                                format="webp"
                            />
                        </div>
                        <div>
                            <p class="speaker-name">{{ speaker.firstName }} {{ speaker.lastName }}</p>
                            <p class="speaker-organization">{{ speaker.organization }}</p>
                        </div>
                    </li>
                    <li v-if="session.speakers.length > 2" class="speaker-item">
                        <p class="speaker-name">
                            <IconPeople width="20" height="20" />
                            {{ t('Découvre les invités') }}
                            <IconArrow width="12" height="12" />
                        </p>
                    </li>
                </ul>
                <ul v-else class="speakers-list">
                    <li
                        v-for="(speaker, i) in session.speakers"
                        :key="`speaker-${session.id}-${i}`"
                        class="speaker-item"
                    >
                        <div class="speaker-photo">
                            <NuxtImg
                                v-if="speaker.photoUrl"
                                :src="speaker.photoUrl"
                                :alt="`${speaker.firstName} ${speaker.lastName}`"
                                width="40"
                                height="40"
                                format="webp"
                            />
                            <NuxtImg
                                v-else
                                :src="`https://ui-avatars.com/api/?name=${speaker.firstName}+${speaker.lastName}&background=e2d5c6&color=593e35&bold=true&format=svg`"
                                :alt="`${speaker.firstName} ${speaker.lastName}`"
                                width="40"
                                height="40"
                                format="webp"
                            />
                        </div>
                        <div>
                            <p class="speaker-name">{{ speaker.firstName }} {{ speaker.lastName }}</p>
                            <p class="speaker-organization">{{ speaker.organization }}</p>
                        </div>
                    </li>
                </ul>
            </template>

            <span class="session-time">{{
                t('{start} à {end}', {
                    start: formatSessionTime(session.beginsAt),
                    end: formatSessionTime(session.endsAt),
                })
            }}</span>
        </div>
        <ScheduleSessionCategories :categories="session.categories" :hover-colors="hoverColors" />
    </div>
</template>

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
    font-weight: 500;
    margin-bottom: 16px;
}
.session-link {
    font-size: rem(20px);
    font-weight: 500;
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
    align-items: flex-start;
    gap: 8px;
    .speaker-photo {
        display: flex;
        overflow: hidden;
        border-radius: 8px;
        flex-shrink: 0;
    }
}
.speaker-name {
    font-size: rem(14px);
    font-weight: 700;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}
.speaker-organization {
    font-size: rem(14px);
    margin: 0;
}
</style>

<i18n lang="json">
{
    "en": {
        "{start} à {end}": "{start} to {end}",
        "Découvre les invités": "Meet the guests"
    }
}
</i18n>
