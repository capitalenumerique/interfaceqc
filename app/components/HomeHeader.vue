<script lang="ts" setup>
import { shuffle } from 'es-toolkit/array';
import { VueDraggable } from 'vue-draggable-plus';

import Piece2 from '@/assets/svg/puzzle/piece-3.svg';
import Piece3 from '@/assets/svg/puzzle/piece-3.jpg';
import Piece4 from '@/assets/svg/puzzle/piece-2.svg?component';
import Piece5 from '@/assets/svg/puzzle/piece-4.svg';
import Piece6 from '@/assets/svg/puzzle/piece-6.svg?component';
import Piece7 from '@/assets/svg/puzzle/piece-7.svg?component';
import Piece8 from '@/assets/svg/puzzle/piece-8.svg?component';
import Piece9 from '@/assets/svg/puzzle/piece-9.svg?component';
import Piece10 from '@/assets/svg/puzzle/piece-10.svg?component';
import Piece11 from '@/assets/svg/puzzle/piece-11.svg?component';
import Piece12 from '@/assets/svg/puzzle/piece-12.svg?component';
import Piece13 from '@/assets/svg/puzzle/piece-13.svg?component';
import Piece14 from '@/assets/svg/puzzle/piece-14.svg?component';
import Piece15 from '@/assets/svg/puzzle/piece-15.svg?component';

const { t } = useI18n();
const { eventDates } = useEventDates();

const drag = ref(false);
const list = shallowRef([
    {
        id: 1,
    },
    {
        id: 2,
        img: Piece2,
        text: eventDates.value.replace(/(.[^,]*)([,]?\s)/, '$1<br>'),
    },
    {
        id: 3,
        img: Piece3,
    },
    {
        id: 4,
        component: Piece4,
    },
    {
        id: 5,
        img: Piece5,
        text: t('Terminal de croisière <br>Port de Québec'),
    },
    {
        id: 6,
        component: Piece6,
    },
    {
        id: 7,
        component: Piece7,
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
        component: Piece11,
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

onMounted(() => {
    setTimeout(() => {
        list.value = shuffle(list.value);
    }, 1000);
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
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    .piece {
        display: flex;
        font-weight: 900;
        font-size: 32px;
        aspect-ratio: 288 / 280;
        background-color: var(--beige-100);
        transition: opacity 100ms ease-in-out;
        cursor: move;
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
    .piece-3 {
        align-self: flex-end;
    }
    .piece-4 {
    }
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
    position: absolute;
}
</style>
