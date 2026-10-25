export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive<HTMLElement, { delay?: number } | undefined>('reveal', {
        // Ship the hidden state in the server-rendered HTML itself, so
        // there's a real "before" frame on screen before any JS runs.
        // Without this, elements already in the viewport on load render
        // fully visible first (SSR knows nothing of "reveal" state), then
        // mounted() below hides and the observer re-reveals them in quick
        // succession — a race that can eat the whole transition instead of
        // animating it.
        getSSRProps(binding) {
            const classes = ['v-reveal'];
            if (binding.arg) classes.push(`v-reveal--${binding.arg}`);
            const delay = binding.value?.delay;
            return {
                class: classes,
                style: delay ? `--reveal-delay: ${delay}ms` : undefined,
                // The client vnode never carries these (mounted() adds them
                // imperatively), so tell Vue the class/style diff is intended.
                'data-allow-mismatch': 'class,style',
            };
        },
        mounted(el, binding) {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            el.classList.add('v-reveal');
            if (binding.arg) el.classList.add(`v-reveal--${binding.arg}`);

            const delay = binding.value?.delay;
            if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);

            const reveal = () => el.classList.add('v-reveal--in');

            // Since the element ships hidden via SSR above, it must never be
            // left stranded invisible if IntersectionObserver isn't there to
            // do its job. A blanket "reveal after N seconds regardless"
            // timer would seem like a reasonable extra safety net, but it
            // isn't: it fires for every element at roughly the same wall-clock
            // moment (they all mount together on load), so anything you
            // haven't scrolled to yet gets force-revealed while still
            // off-screen. This synchronous capability check is the only
            // fallback that can't misfire that way.
            if (typeof IntersectionObserver === 'undefined') {
                reveal();
                return;
            }

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            reveal();
                            observer.unobserve(el);
                        }
                    }
                },
                // -40px barely trimmed the bottom edge, so a slow scroll would
                // trigger the reveal the instant a sliver of the element
                // peeked into view (only masked at fast scroll speeds, which
                // skip past that sliver before a frame renders). -15% keeps
                // that exclusion zone proportional to viewport height, so
                // elements need to be meaningfully on screen first.
                { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
            );

            observer.observe(el);
        },
    });
});
