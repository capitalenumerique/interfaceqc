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
    margin: 8% 0;
    + .wave-section-wrapper {
        position: relative;
        margin-top: -8%;
        .top-wave {
            display: none;
        }
    }
}
.top-wave,
.bottom-wave {
    width: 100%;
}
.top-wave {
    position: relative;
    z-index: -1;
    transform: translateY(calc(-100% + 1px));
}
.bottom-wave {
    position: relative;
    z-index: -1;
    transform: translateY(calc(100% + 1px));
}
</style>
