import { DateTime } from 'luxon';

export const SCHEDULE_RELEASE_DATE = DateTime.fromObject(
    { year: 2026, month: 3, day: 25, hour: 17, minute: 0o0 },
    { zone: 'America/Toronto' },
);
