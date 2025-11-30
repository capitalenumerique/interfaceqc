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
        'vue/html-button-has-type': 'error',
        'vue/block-order': [
            'error',
            {
                order: ['script', 'template', 'style'],
            },
        ],
        'vue/block-lang': [
            'error',
            {
                script: {
                    lang: 'ts',
                },
            },
        ],
        'vue/define-macros-order': [
            'error',
            {
                order: ['defineOptions', 'definePageMeta', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
                defineExposeLast: true,
            },
        ],
    },
});
