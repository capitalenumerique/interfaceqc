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

const scrollContainers = ref<HTMLElement[]>([]);

const arrivedStates = ref<{ left: boolean; right: boolean }[]>([]);

onMounted(() => {
    scrollContainers.value.forEach((el, i) => {
        const { arrivedState: state } = useScroll(ref(el));

        arrivedStates.value[i] = { left: state.left, right: state.right };

        watch(state, (val) => {
            arrivedStates.value[i] = { left: val.left, right: val.right };
        });
    });
});

const timeslotsWrapper = ref<HTMLElement | null>(null);

useResizeObserver(timeslotsWrapper, () => {
    scrollContainers.value.forEach((el, i) => {
        if (!arrivedStates.value[i]) return;
        const isFullyVisible = el.scrollWidth <= el.clientWidth;
        arrivedStates.value[i].right = isFullyVisible || el.scrollLeft + el.clientWidth >= el.scrollWidth;
        arrivedStates.value[i].left = el.scrollLeft <= 0;
    });
});

const scrollInterval = ref<ReturnType<typeof setInterval> | null>(null);

function startScroll(direction: 'left' | 'right', index: number) {
    stopScroll();
    scrollInterval.value = setInterval(() => {
        const el = scrollContainers.value[index];
        if (el) {
            el.scrollLeft += direction === 'right' ? 8 : -8;
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
    <div v-if="day" ref="timeslotsWrapper">
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
            <div class="timeslot-sessions-wrapper">
                <div
                    v-if="timeslot.type === 'regular'"
                    class="gradient gradient-left"
                    :class="{ 'is-visible': arrivedStates[i] && !arrivedStates[i].left }"
                    @mouseenter="startScroll('left', i)"
                    @mouseleave="stopScroll"
                >
                    <span class="icon-wrapper">
                        <IconArrow width="20" height="20"/>
                    </span>
                </div>
                <div :ref="(el) => { if (el) scrollContainers[i] = el as HTMLElement }" class="timeslot-sessions">
                    <div v-for="place in timeslot.places" :key="`session-${timeslot.time}-${place.name}`" class="session">
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
                <div
                    v-if="timeslot.type === 'regular'"
                    class="gradient gradient-right"
                    :class="{ 'is-visible': arrivedStates[i] && !arrivedStates[i].right }"
                    @mouseenter="startScroll('right', i)"
                    @mouseleave="stopScroll"
                >
                    <span class="icon-wrapper"">
                        <IconArrow width="20" height="20"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

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
        margin-top: 68px;
    }
    @media (--lg) {
        margin-top: 0;
        &.has-place {
            margin-top: 68px;
        }
    }
}
.timeslot-sessions-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}
.timeslot-sessions {
    margin-bottom: 24px;
    overflow: hidden;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (--lg-down) {
        border-radius: 8px;
    }
    @media (--lg) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin-bottom: 0;
    }
    .special & {
        border-radius: 8px;
    }
}
.gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 64px;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--hover-transition);
    &.is-visible {
        opacity: 1;
        pointer-events: all;
    }
}
.gradient-left {
    left: 0;
    background: linear-gradient(to right, var(--color-white), transparent);
    .icon-wrapper {
        left: 16px;
        svg {
            transform: rotate(180deg);
        }
    }
}
.gradient-right {
    right: 0;
    background: linear-gradient(to left, var(--color-white), transparent);
    .icon-wrapper {
        right: 16px;
    }
}
.icon-wrapper {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--beige-100);
    top: 50%;
    transform: translateY(-50%);
    
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
    min-width: 218px;
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
