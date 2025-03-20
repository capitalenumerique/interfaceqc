import { repositoryName } from './slicemachine.config.json';
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
        '@hebilicious/vue-query-nuxt',
        '@nuxt/scripts',
    ],
    devtools: {
        enabled: true,
        componentInspector: false,
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
            ],
        },
    },
    css: [
        'normalize.css/normalize.css',
        '@/assets/css/colors.css',
        '@/assets/css/variables.css',
        '@/assets/css/app.css',
    ],
    runtimeConfig: {
        public: {
            commitTag: process.env.COMMIT_TAG || process.env.NUXT_ENV_CURRENT_GIT_TAG,
            commitShortSha: process.env.COMMIT_SHORT_SHA || process.env.NUXT_ENV_CURRENT_GIT_SHA,
            swapcardGraphqlEndpoint: process.env.NUXT_PUBLIC_SWAPCARD_GRAPHQL_ENDPOINT,
        },
        swapcardToken: process.env.NUXT_SWAPCARD_AUTH_TOKEN,
        swapcardEventId: process.env.NUXT_SWAPCARD_EVENT_ID,
    },
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-04-03',
    vite: {
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
    i18n: {
        baseUrl: 'https://interfaceqc.com',
        strategy: 'prefix_except_default',
        defaultLocale: 'fr',
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
            },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
    },
    image: {
        provider: 'prismic',
        quality: 70,
        format: ['webp'],
    },
    prismic: {
        endpoint: repositoryName,
    },
    scripts: {
        registry: {
            googleTagManager: {
                id: 'GTM-N9L2KH72',
            },
        },
    },
});
