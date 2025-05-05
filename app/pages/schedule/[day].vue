<template>
    <div>
        <div
            v-for="(timeslot, i) in data[day - 1].timeslots"
            :key="`timeslot-${timeslot.time}`"
            class="timeslot"
            :class="timeslot.type"
        >
            <span
                class="time"
                :class="{
                    'has-place': timeslot.type !== 'regular' || data[day - 1].timeslots[i - 1]?.type !== 'regular',
                }"
            >
                {{ formatSessionTime(timeslot.time) }}
            </span>
            <div class="timeslot-sessions">
                <div v-for="place in timeslot.places" :key="`session-${timeslot.time}-${place.name}`" class="session">
                    <div
                        v-if="
                            i === 0 ||
                            timeslot.type === 'special' ||
                            data[day - 1].timeslots[i - 1]?.type !== 'regular' ||
                            showPlace
                        "
                        class="place"
                    >
                        {{ place.name }}
                    </div>
                    <div class="session-cell">
                        <ScheduleSessionItem v-if="place.session" :session="place.session" />
                        <div v-else class="to-be-anounced">{{ t('À venir') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBreakpoints } from '@vueuse/core';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const { formatSessionTime } = useTimeFormatter();

const route = useRoute();
const breakpoints = useBreakpoints({ lg: 1024 }, { ssrWidth: 1024 });
const showPlace = breakpoints.smaller('lg');
const day = route.params.day;

definePageMeta({
    scrollToTop: false,
});

defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});

defineI18nRoute({
    paths: {
        fr: '/programmation/[day]',
    },
});
</script>

<style lang="postcss" scoped>
.timeslot {
    @media (--md) {
        display: grid;
        grid-template-columns: 80px 1fr;
    }
    @media (--lg) {
        &.regular {
            + .regular {
                .timeslot-sessions {
                    border-top: 0;
                }
            }
            &:has(+ .special) {
                margin-bottom: 24px;
                .timeslot-sessions {
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                }
            }
        }
    }
    &.special {
        margin-bottom: 24px;
        .timeslot-sessions {
            display: block;
        }
        + .regular {
            .timeslot-sessions {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            }
        }
    }
    &:first-child {
        .timeslot-sessions {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
    }
    &:last-child {
        .timeslot-sessions {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    }
}
.time {
    display: block;
    font-weight: 600;
    @media (--md-down) {
        margin-bottom: 16px;
    }
    @media (--md) {
        margin-top: 68px;
    }
    @media (--lg) {
        margin-top: 0;
        &.has-place {
            margin-top: 68px;
        }
    }
}
.timeslot-sessions {
    border: 1px solid var(--gray-500);
    margin-bottom: 24px;
    overflow: hidden;
    @media (--lg-down) {
        border-radius: 8px;
    }
    @media (--lg) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 0;
    }
    .special & {
        border-radius: 8px;
    }
}
.place {
    padding: 24px;
    font-weight: 600;
    border-bottom: 1px solid var(--gray-500);
}
.session {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--gray-500);
    @media (--lg) {
        border-right: 1px solid var(--gray-500);
        border-bottom: 0;
    }
    &:last-child {
        border-right: 0;
        border-bottom: 0;
    }
}
.session-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    @media (--lg) {
        justify-content: center;
    }
}
.to-be-anounced {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-600);
    width: 100%;
    min-height: 250px;
}
</style>

<i18n lang="json">
{
    "en": {
        "À venir": "To be announced"
    }
}
</i18n>
