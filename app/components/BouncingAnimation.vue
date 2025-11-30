<template>
    <div ref="container" class="container">
        <div ref="object" class="object"><slot /></div>
    </div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion';
import { useResizeObserver } from '@vueuse/core';

const props = defineProps({
    duration: {
        type: Number,
        default: 3000,
    },
});

const emit = defineEmits(['bounce']);

const object = ref();
const container = ref();
let motionInstance = null;

function startAnimation() {
    const transitionOptions = {
        duration: props.duration,
        ease: 'linear',
    };
    const halfWidth = container.value.clientWidth / 2 - object.value.offsetWidth / 2;
    const halfHeight = container.value.clientHeight / 2 - object.value.offsetHeight / 2;

    const leftPositions = { x: 0, y: halfHeight };
    const bottomBouncePositions = {
        x: halfWidth,
        y: container.value.clientHeight - object.value.offsetHeight,
    };
    const rightBouncePositions = {
        x: container.value.clientWidth - object.value.offsetWidth,
        y: halfHeight,
    };
    const topBouncePositions = { x: halfWidth, y: 0 };

    if (motionInstance) {
        motionInstance.stop();
        object.value.style = '';
        motionInstance = null;
    }

    motionInstance = useMotion(object, {
        enter: {
            x: leftPositions.x,
            y: leftPositions.y,
            opacity: 1,
            transition: {
                onComplete: () => {
                    motionInstance.variant.value = 'bottomBounce';
                },
            },
        },
        bottomBounce: {
            x: bottomBouncePositions.x,
            y: bottomBouncePositions.y,
            transition: {
                ...transitionOptions,
                onComplete: () => {
                    emit('bounce');
                    motionInstance.variant.value = 'rightBounce';
                },
            },
        },
        rightBounce: {
            x: rightBouncePositions.x,
            y: rightBouncePositions.y,
            transition: {
                ...transitionOptions,
                onComplete: () => {
                    emit('bounce');
                    motionInstance.variant.value = 'topBounce';
                },
            },
        },
        topBounce: {
            x: topBouncePositions.x,
            y: topBouncePositions.y,
            transition: {
                ...transitionOptions,
                onComplete: () => {
                    emit('bounce');
                    motionInstance.variant.value = 'leftBounce';
                },
            },
        },
        leftBounce: {
            x: leftPositions.x,
            y: leftPositions.y,
            opacity: 1,
            transition: {
                ...transitionOptions,
                onComplete: () => {
                    emit('bounce');
                    motionInstance.variant.value = 'bottomBounce';
                },
            },
        },
    });
}

useResizeObserver(container, () => {
    startAnimation();
});
</script>

<style lang="postcss" scoped>
.container {
    position: relative;
    width: 100%;
}
.object {
    position: absolute;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
}
</style>
