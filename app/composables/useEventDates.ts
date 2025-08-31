export default function () {
    const config = useRuntimeConfig();
    const { locale } = useI18n({ useScope: 'global' });

    const eventDates = computed(() => {
        const formatter = new Intl.DateTimeFormat(locale.value, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        return formatter.formatRange(new Date(config.public.start_date), new Date(config.public.end_date));
    });

    return { eventDates };
}
