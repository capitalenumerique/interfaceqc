export function useTimeFormatter() {
    const { locale } = useI18n();

    const { $luxon } = useNuxtApp();

    function formatSessionTime(time: string): string {
        if (!time) return '';
        const formattedTime = time.length === 8 ? time.substring(0, 5) : time;
        const dateTime = $luxon.DateTime.fromFormat(formattedTime, 'HH:mm');
        return locale.value === 'fr' ? dateTime.toFormat("HH'h'mm") : dateTime.toFormat('HH:mm');
    }

    return { formatSessionTime };
}
