export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive<HTMLElement, { delay?: number } | undefined>('reveal', {
        mounted(el, binding) {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            el.classList.add('v-reveal');
            if (binding.arg) el.classList.add(`v-reveal--${binding.arg}`);

            const delay = binding.value?.delay;
            if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            el.classList.add('v-reveal--in');
                            observer.unobserve(el);
                        }
                    }
                },
                { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
            );

            observer.observe(el);
        },
    });
});
