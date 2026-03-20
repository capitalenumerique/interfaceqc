<script lang="ts" setup>
import { useBreakpoints, useScroll, useResizeObserver } from '@vueuse/core';
import { useRoute } from 'vue-router';

import IconArrow from '@/assets/svg/arrow.svg?component';

// FIXME: https://github.com/nuxt/nuxt/issues/31638
definePageMeta({
    scrollToTop: false,
    i18n: {
        paths: {
            fr: '/programmation/[day]',
        },
    },
});

const { data } = defineProps<{
    data: ScheduleData[];
}>();

const { t } = useI18n();
const { formatSessionTime } = useTimeFormatter();
const route = useRoute();
const breakpoints = useBreakpoints({ lg: 1024 }, { ssrWidth: 1024 });
const showPlace = breakpoints.smaller('lg');
const day = computed(() => data[parseInt(route.params.day as string) - 1]);

const scrollContainer = ref<HTMLElement | null>(null);
const timeslotsWrapper = ref<HTMLElement | null>(null);

const arrivedState = reactive({ left: true, right: false });

onMounted(() => {
    if (!scrollContainer.value) return;
    const { arrivedState: state } = useScroll(scrollContainer);

    watch(
        state,
        (val) => {
            arrivedState.left = val.left;
            arrivedState.right = val.right;
        },
        { immediate: true },
    );
});

useResizeObserver(timeslotsWrapper, () => {
    const el = scrollContainer.value;
    if (!el) return;
    const isFullyVisible = el.scrollWidth <= el.clientWidth;
    arrivedState.right = isFullyVisible || el.scrollLeft + el.clientWidth >= el.scrollWidth;
    arrivedState.left = el.scrollLeft <= 0;
});

const showLeftGradient = computed(() => !arrivedState.left);
const showRightGradient = computed(() => !arrivedState.right);

const scrollInterval = ref<ReturnType<typeof setInterval> | null>(null);

function startScroll(direction: 'left' | 'right') {
    stopScroll();
    scrollInterval.value = setInterval(() => {
        if (scrollContainer.value) {
            scrollContainer.value.scrollLeft += direction === 'right' ? 8 : -8;
        }
    }, 16);
}

function stopScroll() {
    if (scrollInterval.value !== null) {
        clearInterval(scrollInterval.value);
        scrollInterval.value = null;
    }
}
</script>

<template>
    <div v-if="day" ref="timeslotsWrapper" class="schedule-wrapper">
        <div
            class="gradient gradient-left"
            :class="{ 'is-visible': showLeftGradient }"
            @mouseenter="startScroll('left')"
            @mouseleave="stopScroll"
        >
            <span class="icon-wrapper">
                <IconArrow width="20" height="20" />
            </span>
        </div>
        <div
            class="gradient gradient-right"
            :class="{ 'is-visible': showRightGradient }"
            @mouseenter="startScroll('right')"
            @mouseleave="stopScroll"
        >
            <span class="icon-wrapper">
                <IconArrow width="20" height="20" />
            </span>
        </div>
        <div ref="scrollContainer" class="timeslots-scroll">
            <div class="timeslots-inner">
                <div
                    v-for="(timeslot, i) in day.timeslots"
                    :key="`timeslot-${timeslot.time}`"
                    class="timeslot"
                    :class="timeslot.type"
                >
                    <span
                        class="time"
                        :class="{
                            'has-place': timeslot.type !== 'regular' || day.timeslots[i - 1]?.type !== 'regular',
                        }"
                    >
                        {{ formatSessionTime(timeslot.time) }}
                    </span>
                    <div class="timeslot-sessions">
                        <div
                            v-for="place in timeslot.places"
                            :key="`session-${timeslot.time}-${place.name}`"
                            class="session"
                        >
                            <div
                                v-if="
                                    i === 0 ||
                                    timeslot.type === 'special' ||
                                    day.timeslots[i - 1]?.type !== 'regular' ||
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
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.schedule-wrapper {
    position: relative;
}
.timeslots-scroll {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overscroll-behavior-x: none;
    &::-webkit-scrollbar {
        display: none;
    }
}
.timeslots-inner {
    @media (--lg) {
        min-width: 100%;
    }
}
.gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 64px;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--hover-transition);
    padding: 50% 0;
    &.is-visible {
        opacity: 1;
        pointer-events: all;
    }
}
.gradient-left {
    left: 80px;
    background: linear-gradient(to right, var(--beige-100), transparent);
    .icon-wrapper {
        left: 130px;
        transform: translate(32px, 0);
        svg {
            transform: rotate(180deg);
        }
    }
}
.gradient-right {
    right: 0;
    background: linear-gradient(to left, var(--beige-100), transparent);
    .icon-wrapper {
        transform: translate(-32px, 0);
    }
}
.icon-wrapper {
    position: sticky;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--beige-100);
    box-shadow: 0 4px 32px 0 rgba(51, 50, 48, 0.05);
    top: 50vh;
}
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
                .session {
                    border-bottom: 0;
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
        .session {
            border-bottom: 0;
        }
    }
    &:first-child {
        .timeslot-sessions {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
    }
    &:last-child {
        margin-bottom: 0;
        .timeslot-sessions {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    }
}
.time {
    display: block;
    font-weight: 500;
    @media (--md-down) {
        margin-bottom: 16px;
    }
    @media (--md) {
        padding-top: 68px;
    }
    @media (--lg) {
        position: sticky;
        background-color: var(--beige-100);
        left: 0;
        padding-top: 0;
        z-index: 1;
        &.has-place {
            padding-top: 68px;
        }
    }
}
.timeslot-sessions {
    margin-bottom: 24px;
    overflow: hidden;
    @media (--lg-down) {
        border-radius: 8px;
    }
    @media (--lg) {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        min-width: calc(5 * 250px);
        margin-bottom: 0;
    }
    .special & {
        border-radius: 8px;
    }
}
.place {
    padding: 24px;
    font-weight: 500;
    border-bottom: 2px solid var(--beige-100);
}
.session {
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    border: 2px solid var(--beige-100);
    border-width: 0 0 2px;
    @media (--md-down) {
        &:last-child {
            border-bottom: 0;
        }
    }
    @media (--lg) {
        border-width: 0 2px 2px 0;
        &:last-child {
            border-right: 0;
        }
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
