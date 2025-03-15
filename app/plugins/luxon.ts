import { DateTime, Settings } from 'luxon';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            luxon: { DateTime, Settings },
        },
    };
});
