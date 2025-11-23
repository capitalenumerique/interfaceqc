import redirects from './redirects.json';
import ViteSvgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxtjs/prismic',
        '@nuxt/fonts',
        '@nuxtjs/i18n',
        '@nuxt/image',
        '@vueuse/nuxt',
        '@peterbud/nuxt-query',
        '@nuxt/scripts',
    ],
    $development: {
        scripts: {
            registry: {
                googleTagManager: 'mock',
            },
        },
    },
    devtools: {
        enabled: true,
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            link: [
                {
                    href: '/favicon.png',
                    rel: 'icon',
                    type: 'image/png',
                },
                {
                    href: '/favicon-dark.svg',
                    rel: 'icon',
                    type: 'image/svg+xml',
                    media: '(prefers-color-scheme: dark)',
                },
                {
                    href: '/favicon-light.svg',
                    rel: 'icon',
                    type: 'image/svg+xml',
                    media: '(prefers-color-scheme: light)',
                },
                {
                    href: '/site.webmanifest',
                    rel: 'manifest',
                },
            ],
        },
    },
    css: [
        'normalize.css/normalize.css',
        'swiper/css',
        '@/assets/css/colors.css',
        '@/assets/css/variables.css',
        '@/assets/css/app.css',
    ],
    runtimeConfig: {
        public: {
            start_date: '2026-05-26T00:00:00',
            end_date: '2026-05-28T00:00:00',
            ticketing_url: 'https://ti.to/cnum/interface2026',
            commitTag: process.env.COMMIT_TAG || process.env.NUXT_ENV_CURRENT_GIT_TAG,
            commitShortSha: process.env.COMMIT_SHORT_SHA || process.env.NUXT_ENV_CURRENT_GIT_SHA,
            swapcardGraphqlEndpoint: process.env.NUXT_PUBLIC_SWAPCARD_GRAPHQL_ENDPOINT,
        },
        swapcardToken: process.env.NUXT_SWAPCARD_AUTH_TOKEN,
        swapcardEventId: process.env.NUXT_SWAPCARD_EVENT_ID,
    },
    routeRules: {
        ...redirects,
    },
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-09-19',
    // nitro: {
    //     preset: 'cloudflare_modules',
    //     cloudflare: {
    //         deployConfig: true,
    //         nodeCompat: true,
    //     },
    // },
    vite: {
        define: {
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
        },
        plugins: [
            ViteSvgLoader({
                svgoConfig: {
                    plugins: [
                        'prefixIds',
                        'removeTitle',
                        'removeDesc',
                        'removeDimensions',
                        {
                            name: 'removeAttrs',
                            params: {
                                attrs: '(fill|stroke)',
                            },
                        },
                    ],
                },
                defaultImport: 'url',
            }),
        ],
    },
    postcss: {
        plugins: {
            '@csstools/postcss-global-data': {
                files: ['./app/assets/css/variables.css'],
            },
            'postcss-preset-env': {},
            'postcss-nested': {},
            'postcss-functions': {
                functions: {
                    rem: (pxValue: number | string) => {
                        if (typeof pxValue === 'string') {
                            pxValue = pxValue.replace('px', '');
                        }
                        const value = Number(pxValue);
                        return `${value / 16}rem`;
                    },
                },
            },
        },
    },
    eslint: {
        checker: true,
        config: {
            nuxt: {
                sortConfigKeys: true,
            },
        },
    },
    fonts: { defaults: { weights: [400, 500, 600, 700] } },
    i18n: {
        baseUrl: 'https://interfaceqc.com',
        strategy: 'prefix_except_default',
        defaultLocale: 'fr',
        customRoutes: 'meta',
        compilation: {
            strictMessage: false,
        },
        locales: [
            {
                code: 'fr',
                name: 'Français',
                language: 'fr-CA',
            },
            {
                code: 'en',
                name: 'English',
                language: 'en-CA',
                file: 'en.js',
            },
        ],
        detectBrowserLanguage: false,
    },
    image: {
        provider: 'ipx',
        domains: ['static.swapcard.com', 'images.prismic.io', 'interface-qc.cdn.prismic.io'],
        quality: 70,
        format: ['webp'],
    },
    nuxtQuery: {
        autoImports: ['useQuery', 'useMutation'],
    },
    prismic: {
        endpoint: 'interface-qc',
    },
    scripts: {
        registry: {
            googleTagManager: {
                id: 'GTM-N9L2KH72',
            },
        },
    },
});
