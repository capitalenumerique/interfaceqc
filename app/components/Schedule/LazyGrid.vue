<template>
    <div>
        <ul class="timeslots">
            <li v-for="(timeslot, i) in emptyGrid" :key="`lazy-timeslot-${i}`" class="timeslot" :class="timeslot.class">
                <span
                    class="time"
                    :class="{
                        'has-place': timeslot.hasPlace,
                    }"
                    >{{ formatSessionTime(timeslot.time) }}</span
                >
                <div class="timeslot-sessions">
                    <div
                        v-for="(place, j) in timeslot.places"
                        :key="`lazy-session-${timeslot.time}-${j}`"
                        class="session"
                    >
                        <div v-if="timeslot.hasPlace" class="place">
                            <div class="line"></div>
                        </div>
                        <div class="session-cell">
                            <div class="line-title"></div>
                            <div class="line-title"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="tag"></div>
                            <ul class="tags">
                                <li class="tag small"></li>
                                <li class="tag"></li>
                                <li class="tag large"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { formatSessionTime } = useTimeFormatter();

const emptyGrid = [
    {
        time: '09:00:00',
        places: 1,
        hasPlace: true,
        class: 'special',
    },
    {
        time: '10:00:00',
        places: 4,
        hasPlace: true,
        class: 'regular',
    },
    {
        time: '11:00:00',
        places: 4,
        hasPlace: false,
        class: 'regular',
    },
    {
        time: '12:00:00',
        places: 1,
        hasPlace: true,
        class: 'special',
    },
    {
        time: '13:00:00',
        places: 4,
        hasPlace: true,
        class: 'regular',
    },
    {
        time: '14:00:00',
        places: 4,
        hasPlace: false,
        class: 'regular',
    },
    {
        time: '15:00:00',
        places: 4,
        hasPlace: false,
        class: 'regular',
    },
    {
        time: '16:00:00',
        places: 4,
        hasPlace: false,
        class: 'regular',
    },
    {
        time: '17:00:00',
        places: 1,
        hasPlace: true,
        class: 'special',
    },
];
</script>

<style lang="postcss" scoped>
.timeslots {
    list-style: none;
    padding: 0;
    margin: 0;
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
    border: 1px solid var(--gray-900);
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
    border-bottom: 1px solid var(--gray-900);
    .line {
        margin: 0;
    }
}
.session {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--gray-900);
    @media (--lg) {
        border-right: 1px solid var(--gray-900);
        border-bottom: 0;
    }
    &:last-child {
        border-right: 0;
        border-bottom: 0;
    }
}
.session-cell {
    padding: 20px;
}
.line,
.line-title,
.tag {
    animation: hintloading 1s ease-in-out 0s infinite reverse;
}
.line,
.line-title {
    background-color: var(--beige-200);
    height: 16px;
    width: 100%;
    margin-bottom: 8px;
    max-width: 200px;
}
.line-title {
    height: 24px;
    max-width: 300px;
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
    &.small {
        width: 100px;
    }
    &.large {
        width: 200px;
    }
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
