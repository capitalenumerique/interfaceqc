<script setup lang="ts">
import IconWaveTop from '@/assets/svg/wave-top.svg?component';
import IconWaveBottom from '@/assets/svg/wave-bottom.svg?component';

type Orientation = 'top' | 'bottom';

defineProps<{
    fill: string;
    orientation: Orientation;
}>();
</script>

<template>
    <IconWaveTop v-if="orientation === 'top'" class="top-wave" :style="`fill: ${fill}`" />
    <IconWaveBottom v-if="orientation === 'bottom'" class="bottom-wave" :style="`fill: ${fill}`" />
</template>

<style scoped>
.top-wave {
    transform: translateY(calc(-100% + 1px));
}
.bottom-wave {
    transform: translateY(calc(100% + 1px));
}
</style>
