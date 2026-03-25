<script lang="ts" setup>
import type { DateTime } from 'luxon';

const props = defineProps<{ releaseDate: DateTime }>();
const emit = defineEmits<{ done: [] }>();

const { $luxon } = useNuxtApp();
const { t } = useI18n();

const timeLeft = ref(props.releaseDate.diff($luxon.DateTime.now(), ['days', 'hours', 'minutes', 'seconds']));

const hours = computed(() => String(Math.floor(timeLeft.value.hours)).padStart(2, '0'));
const minutes = computed(() => String(Math.floor(timeLeft.value.minutes)).padStart(2, '0'));
const seconds = computed(() => String(Math.floor(timeLeft.value.seconds)).padStart(2, '0'));

let interval: ReturnType<typeof setInterval>;
onMounted(() => {
    interval = setInterval(() => {
        const diff = props.releaseDate.diff($luxon.DateTime.now(), ['days', 'hours', 'minutes', 'seconds']);
        if (diff.toMillis() <= 0) {
            clearInterval(interval);
            emit('done');
            return;
        }
        timeLeft.value = diff;
    }, 1000);
});
onUnmounted(() => clearInterval(interval));
</script>

<template>
    <div class="countdown-wrapper">
        <h2 class="countdown-title">{{ t('Dévoilement de la programmation dans...') }}</h2>
        <div class="countdown">
            <div class="countdown-unit">
                <span class="countdown-value">{{ hours }}</span>
                <span class="countdown-label">{{ t('heures') }}</span>
            </div>
            <span class="countdown-separator">:</span>
            <div class="countdown-unit">
                <span class="countdown-value">{{ minutes }}</span>
                <span class="countdown-label">{{ t('minutes') }}</span>
            </div>
            <span class="countdown-separator">:</span>
            <div class="countdown-unit">
                <span class="countdown-value">{{ seconds }}</span>
                <span class="countdown-label">{{ t('secondes') }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.countdown-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 40vh;
}
.countdown-title {
    text-align: center;
    font-weight: 500;
}
.countdown {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}
.countdown-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}
.countdown-value {
    font-family: var(--font-secondary);
    font-size: rem(50px);
    font-weight: 700;
    line-height: 1;
    color: var(--gray-900);
    @media (--md) {
        font-size: rem(120px);
    }
}
.countdown-label {
    font-size: rem(12px);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gray-500);
    @media (--md) {
        font-size: rem(14px);
    }
}
.countdown-separator {
    font-size: rem(60px);
    font-weight: 300;
    color: var(--gray-300);
    line-height: 1;
    margin-bottom: 24px;
    @media (--md) {
        font-size: rem(100px);
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "Dévoilement de la programmation dans...": "Schedule reveal in...",
        "heures": "hours",
        "minutes": "minutes",
        "secondes": "seconds"
    }
}
</i18n>
