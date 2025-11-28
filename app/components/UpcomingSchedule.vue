<script lang="ts" setup>
import { CATEGORY_COLORS } from '@/utils/categoryColors';

const { t } = useI18n();

const hoverColors = computed(() => {
    const colors = {
        bg: 'var(--red-600)',
        text: 'var(--yellow-200)',
    };
    return {
        '--hover-text': colors.text,
        '--hover-bg': colors.bg,
    };
});

const categories = computed(() =>
    Object.entries(CATEGORY_COLORS).map(([name, colors]) => ({
        name,
        colors,
    })),
);
</script>

<template>
    <div class="timeslot-sessions">
        <div class="session">
            <div class="session-wrapper">
                <h2 class="session-title" v-html="t('Programmation <br />à venir')"></h2>
                <ScheduleSessionCategories
                    class="session-categories"
                    :categories="categories"
                    :hover-colors="hoverColors"
                />
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.timeslot-sessions {
    border: 1px solid var(--gray-500);
    margin-bottom: 24px;
    overflow: hidden;
    border-radius: 8px;
    @media (--lg-down) {
        border-radius: 8px;
    }
    @media (--lg) {
        margin-bottom: 0;
    }
}
.session {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--gray-500);
    padding: 24px;
    @media (--lg) {
        border-right: 1px solid var(--gray-500);
        border-bottom: 0;
    }
    &:last-child {
        border-right: 0;
        border-bottom: 0;
    }
}
.session-title {
    font-size: rem(24px);
    font-weight: 600;
    margin-bottom: 80px;
    max-width: 250px;
}
.session-categories {
    max-width: 600px;
}
</style>

<i18n lang="json">
{
    "en": {
        "Programmation <br />à venir": "Schedule <br />coming soon"
    }
}
</i18n>
