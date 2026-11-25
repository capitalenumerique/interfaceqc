import { DateTime } from 'luxon';

export const SCHEDULE_RELEASE_DATE = DateTime.fromObject(
    { year: 2027, month: 4, day: 15, hour: 17, minute: 0o0 },
    { zone: 'America/Toronto' },
);
