<script lang="ts" setup>
import confetti from 'canvas-confetti';
import { useBreakpoints } from '@vueuse/core';
import { shuffle } from 'es-toolkit/array';
import { VueDraggable } from 'vue-draggable-plus';

import Piece2 from '@/assets/svg/puzzle/piece-2.svg?component';
import Piece3 from '@/assets/svg/puzzle/piece-3.svg?component';
import Piece4 from '@/assets/svg/puzzle/piece-4.svg?component';
import Piece5 from '@/assets/svg/puzzle/piece-5.svg?component';
import Piece6 from '@/assets/svg/puzzle/piece-6.svg?skipsvgo';
import Piece7 from '@/assets/svg/puzzle/piece-7.svg?skipsvgo';
import Piece8 from '@/assets/svg/puzzle/piece-8.svg?component';
import Piece9 from '@/assets/svg/puzzle/piece-9.svg?component';
import Piece10 from '@/assets/svg/puzzle/piece-10.svg?component';
import Piece11 from '@/assets/svg/puzzle/piece-11.jpg';
import Piece12 from '@/assets/svg/puzzle/piece-12.svg?component';
import Piece13 from '@/assets/svg/puzzle/piece-13.svg?component';
import Piece14 from '@/assets/svg/puzzle/piece-14.svg?component';
import Piece15 from '@/assets/svg/puzzle/piece-15.svg?component';

const { t } = useI18n();
const { eventDates } = useEventDates();

const breakpoints = useBreakpoints({
    mobile: 0,
    desktop: 1024,
});
const activeBreakpoint = breakpoints.active();

const initialized = ref(false);
const drag = ref(false);
const list = shallowRef([
    {
        id: 1,
    },
    {
        id: 2,
        component: Piece2,
    },
    {
        id: 3,
        component: Piece3,
    },
    {
        id: 4,
        component: Piece4,
    },
    {
        id: 5,
        component: Piece5,
    },
    {
        id: 6,
        component: Piece6,
        text: eventDates.value.replace(/(.[^,]*)([,]?\s)/, '$1<br>'),
    },
    {
        id: 7,
        component: Piece7,
        text: t('Terminal de croisière <br>Port de Québec'),
    },
    {
        id: 8,
        component: Piece8,
    },
    {
        id: 9,
        component: Piece9,
    },
    {
        id: 10,
        component: Piece10,
    },
    {
        id: 11,
        img: Piece11,
    },
    {
        id: 12,
        component: Piece12,
    },
    {
        id: 13,
        component: Piece13,
    },
    {
        id: 14,
        component: Piece14,
    },
    {
        id: 15,
        component: Piece15,
    },
]);
const solutions = {
    desktop: [null, null, 3, 4, 5, null, null, 8, 9, 10, null, null, 13, 14, 15],
    mobile: [3, 4, 5, 8, 9, 10, 13, 14, 15, null, null, null, null, null, null],
};

onBeforeMount(() => {
    const solution = solutions[activeBreakpoint.value as keyof typeof solutions];
    list.value = list.value.sort((a, b) => {
        const aIndex = solution.indexOf(a.id);
        const bIndex = solution.indexOf(b.id);
        return aIndex - bIndex;
    });
});

onMounted(() => {
    setTimeout(() => {
        list.value = shuffle(list.value);
        initialized.value = true;
    }, 2000);
});

const finished = computed(() => {
    const solution = solutions[activeBreakpoint.value as keyof typeof solutions];
    console.log(
        list.value.map((l) => l.id),
        solution,
        list.value.map((l) => l.id).every((id, index) => solution[index] === null || id === solution[index]),
    );
    return (
        initialized.value &&
        list.value.map((l) => l.id).every((id, index) => solution[index] === null || id === solution[index])
    );
});

watch(finished, (newValue) => {
    if (newValue) {
        const shape1 = confetti.shapeFromPath({
            path: 'M99 66H132V82.5H148.5V66H165V49.5H214.5V66H231V82.5H247.5V132H231V148.5H181.5V181.5H198V231H214.5V247.5H165V198H148.5V165H132V181.5H115.5V214.5H99V231H82.5V247.5H49.5V214.5H66V198H82.5V165H33V148.5H16.5V82.5H33V66H49.5V49.5H99V66ZM49.5 132H99V115.5H115.5V99H82.5V82.5H49.5V132ZM181.5 99H165V115.5H214.5V82.5H181.5V99Z',
        });
        const shape2 = confetti.shapeFromPath({
            path: 'M132 33H148.5V148.5H198V165H148.5V214.5H165V231H181.5V214.5H198V231H214.5V247.5H49.5V231H99V214.5H115.5V181.5H99V165H66V148.5H115.5V16.5H132V33ZM231 214.5H198V198H231V214.5ZM247.5 198H231V165H247.5V198ZM214.5 181.5H198V165H214.5V181.5ZM231 165H214.5V148.5H231V165Z',
        });
        const shape3 = confetti.shapeFromPath({
            path: 'M231 33H198V148.5H231V165H247.5V198H231V214.5H214.5V231H148.5V214.5H115.5V231H49.5V214.5H33V198H16.5V148.5H33V132H66V148.5H82.5V82.5H99V66H148.5V49.5H165V82.5H115.5V99H99V132H132V148.5H165V165H181.5V49.5H165V33H181.5V16.5H231V33ZM198 198H214.5V181.5H198V198ZM99 181.5H115.5V165H99V181.5Z',
        });
        const shape4 = confetti.shapeFromPath({
            path: 'M132 214.5H181.5V231H214.5V247.5H49.5V231H82.5V214.5H115.5V198H132V214.5ZM148.5 198H132V165H148.5V198ZM231 33V49.5H214.5V66H198V82.5H181.5V99H165V115.5H148.5V132H132V165H115.5V115.5H99V99H82.5V82.5H66V66H49.5V49.5H33V33H231Z',
        });
        const shape5 = confetti.shapeFromPath({
            path: 'M132 33H148.5V66H165V82.5H198V99H214.5V132H231V165H214.5V198H198V214.5H181.5V231H165V247.5H99V231H82.5V214.5H66V198H49.5V165H33V132H49.5V148.5H66V132H99V165H82.5V198H99V214.5H132V198H148.5V165H165V132H148.5V99H132V132H99V99H82.5V115.5H66V132H49.5V99H66V82.5H99V66H132V49.5H115.5V0H132V33ZM132 198H99V165H132V198ZM148.5 165H132V132H148.5V165ZM115.5 99H132V82.5H115.5V99Z',
        });
        const shape6 = confetti.shapeFromPath({
            path: 'M99 82.5H82.5V99H66V148.5H82.5V181.5H99V198H181.5V181.5H198V132H181.5V181.5H115.5V165H99V99H115.5V82.5H132V66H198V82.5H214.5V99H231V165H214.5V198H198V214.5H181.5V231H99V214.5H66V198H49.5V181.5H33V99H49.5V82.5H66V49.5H82.5V33H181.5V49.5H99V82.5ZM148.5 115.5H132V148.5H148.5V132H181.5V115.5H165V99H148.5V115.5Z',
        });
        const shape7 = confetti.shapeFromPath({
            path: 'M198 49.5H165V66H148.5V82.5H181.5V99H198V148.5H214.5V165H198V181.5H181.5V198H165V214.5H148.5V231H198V247.5H66V231H115.5V214.5H99V198H82.5V181.5H66V165H49.5V148.5H66V99H82.5V82.5H115.5V66H99V49.5H66V33H198V49.5ZM49.5 148.5H33V99H49.5V148.5ZM231 148.5H214.5V99H231V148.5ZM66 99H49.5V82.5H66V99ZM214.5 99H198V82.5H214.5V99Z',
        });

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
        const between = (val: number, low: number, high: number) => val > low && val < high;
        const colors = (function* () {
            // const values = ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'];

            const hour = new Date().getHours();
            const values =
                hour >= 9 && hour < 17 ? ['#CCDEFF', '#871C00', '#FF4000'] : ['#EECFFF', '#570352', '#DFD300'];

            for (let i = values.length; true; i = i - 1 || values.length) {
                yield values[i - 1]!;
            }
        })();

        const randomConfetti = (color: string, x: number) =>
            confetti({
                particleCount: 1,
                startVelocity: 0,
                origin: { x: x, y: 0 },
                shapes: [shape1, shape2, shape3, shape4, shape5, shape6, shape7],
                colors: [color],
                gravity: randomInRange(1, 2.5),
                scalar: randomInRange(2, 4),
                drift: randomInRange(-0.7, 0.7),
            });

        const drop = () => {
            const duration = 6 * 1000;
            const animationEnd = Date.now() + duration;

            const dropConfetti = ({ count, minX, maxX }: { count: number; minX: number; maxX: number }) => {
                while (count--) {
                    randomConfetti(colors.next().value, randomInRange(minX, maxX));
                }
            };

            const frame = () => {
                const timeLeft = animationEnd - Date.now();
                const progress = 1 - timeLeft / duration;

                switch (true) {
                    case between(progress, 0, 0.2):
                        dropConfetti({ count: 4, minX: 0.1, maxX: 0.9 });
                        break;
                    case between(progress, 0.2, 0.5):
                        dropConfetti({ count: 10, minX: 0, maxX: 1 });
                        break;
                    case between(progress, 0.5, 0.7):
                        dropConfetti({ count: 8, minX: 0.1, maxX: 0.9 });
                        break;
                    case between(progress, 0.7, 0.85):
                        dropConfetti({ count: 2, minX: 0.25, maxX: 0.75 });
                        break;
                    case between(progress, 0.85, 2):
                        dropConfetti({ count: 1, minX: 0.4, maxX: 0.6 });
                        break;
                }

                if (timeLeft > 0) {
                    setTimeout(() => frame(), 100);
                }
            };

            frame();
        };

        drop();
    }
});

function onStart() {
    drag.value = true;
}
function onEnd() {
    nextTick(() => {
        drag.value = false;
    });
}
</script>

<template>
    <VueDraggable
        v-model="list"
        class="puzzle"
        :class="{ finished: finished }"
        :delay="100"
        :delay-on-touch-only="true"
        :animation="250"
        easing="ease-in-out"
        @start="onStart"
        @end="onEnd"
    >
        <TransitionGroup
            v-for="item in list"
            :key="item.id"
            type="transition"
            tag="div"
            :name="!drag ? 'fade' : undefined"
            class="piece"
            :class="[`piece-${item.id}`]"
        >
            <img v-if="item.img" :src="item.img" alt="" />
            <component :is="item.component" v-else />
            <p v-if="item.text" class="sr-only" v-html="item.text"></p>
        </TransitionGroup>
    </VueDraggable>
</template>

<style lang="postcss" scoped>
.puzzle {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(3, 1fr);
    @media (--lg) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(5, 1fr);
    }
    .piece {
        display: flex;
        font-weight: 900;
        font-size: 32px;
        aspect-ratio: 1 / 1;
        background-color: var(--beige-100);
        transition: opacity 100ms ease-in-out;
        cursor: move;
        color: var(--color-primary);
        scale: 1;
        rotate: 0;
        &:hover,
        &:focus-visible {
            opacity: 0.9;
        }
        div {
            width: 100%;
        }
        img,
        svg {
            width: 100%;
        }
        &.sortable-ghost {
            opacity: 0;
        }
        &.sortable-drag {
            opacity: 1 !important;
        }
    }
    .piece-2,
    .piece-12 {
        color: var(--gray-900);
    }
    .piece-6,
    .piece-7 {
        color: var(--color-secondary);
    }
    &.finished {
        .piece {
            animation: finished 2s cubic-bezier(0.37, 0, 0.63, 1);
        }
    }
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
    position: absolute;
}

@keyframes finished {
    0% {
        scale: 1;
        rotate: 0turn;
    }
    25% {
        rotate: 0turn;
    }
    50% {
        scale: 0.8;
    }
    75% {
        rotate: 1turn;
    }
    100% {
        scale: 1;
        rotate: 1turn;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Terminal de croisière <br>Port de Québec": "Cruise Terminal <br>Port of Québec"
    }
}
</i18n>
