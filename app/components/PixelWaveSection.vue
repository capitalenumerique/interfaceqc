<script setup lang="ts">
import IconWaveTop from '@/assets/svg/wave-top.svg?component';
import IconWaveBottom from '@/assets/svg/wave-bottom.svg?component';

type WavePlacements = 'top' | 'bottom' | 'both';

const {
    tag = 'section',
    fill = 'var(--color-secondary)',
    wavePlacements = 'both',
} = defineProps<{
    tag?: string;
    fill?: string;
    wavePlacements?: WavePlacements;
}>();

const classes = computed(() => ({
    'has-top-wave': wavePlacements === 'top' || wavePlacements === 'both',
    'has-bottom-wave': wavePlacements === 'bottom' || wavePlacements === 'both',
}));
</script>

<template>
    <component :is="tag" :class="classes" class="wave-section-wrapper">
        <IconWaveTop
            v-if="wavePlacements === 'top' || wavePlacements === 'both'"
            class="top-wave"
            :style="`fill: ${fill}`"
        />
        <slot />
        <IconWaveBottom
            v-if="wavePlacements === 'bottom' || wavePlacements === 'both'"
            class="bottom-wave"
            :style="`fill: ${fill}`"
        />
    </component>
</template>

<style scoped>
.wave-section-wrapper {
    + .wave-section-wrapper {
        position: relative;
        margin-top: -64px;
        @media (--lg) {
            margin-top: -100px;
        }
        .top-wave {
            display: none;
        }
    }
}
.top-wave {
    transform: translateY(calc(-100% + 1px));
}
.bottom-wave {
    transform: translateY(calc(100% + 1px));
}
</style>
