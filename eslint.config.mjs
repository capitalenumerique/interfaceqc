// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    plugins: {
        prettier: prettierPlugin,
    },
    rules: {
        // ...prettierPlugin.configs.recommended.rules,
        ...eslintConfigPrettier.rules,
        ...eslintPluginPrettierRecommended.rules,
        'vue/no-v-html': 'off',
        'vue/v-slot-style': ['error', 'shorthand'],
        'vue/no-bare-strings-in-template': 'error',
        'vue/define-macros-order': [
            'error',
            {
                order: [
                    'defineOptions',
                    'definePageMeta',
                    'defineI18nRoute',
                    'defineModel',
                    'defineProps',
                    'defineEmits',
                    'defineSlots',
                ],
                defineExposeLast: true,
            },
        ],
    },
});
