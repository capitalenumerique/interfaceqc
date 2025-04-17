import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        // Previent le défilement dans les pages de programmation au changement de jour
        if (to.name?.toString().startsWith('schedule-day') && from.name?.toString().startsWith('schedule-day')) {
            return false;
        }
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0 };
    },
};
