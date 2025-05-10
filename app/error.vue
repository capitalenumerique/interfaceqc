<script setup>
import IconAsterisk from '@/assets/svg/shapes/asterisk.svg?component';
const { t } = useI18n();

useHead(() => ({
    titleTemplate: () => {
        const title = props.error.statusCode === 404 ? t('Page non trouvée') : t('Une erreur est survenue');
        return `${title} | Interface`;
    },
}));

const props = defineProps({
    error: {
        type: Object,
        required: true,
    },
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <NuxtLayout>
        <div class="error-wrapper">
            <BouncingAnimation class="animation-container" :duration="9000">
                <div class="shape-container">
                    <IconAsterisk class="asterisk" width="180" />
                </div>
            </BouncingAnimation>
            <template v-if="error.statusCode === 404">
                <h1 class="error-title">{{ t('Page non trouvée') }}</h1>
                <p class="error-content">
                    {{
                        t(
                            'Désolé, la page que tu cherches n’existe pas ou a été déplacée. Assure-toi que l’url ne comporte par d’erreur ou reviens à l’accueil pour poursuivre ta navigation.',
                        )
                    }}
                </p>
            </template>
            <template v-else>
                <h1 class="error-title">{{ t('Une erreur est survenue') }}</h1>
                <p class="error-content">
                    {{
                        t(
                            'Une erreur inattendue est survenue, réessaie plus tard ou reviens à l’accueil pour poursuivre ta navigation.',
                        )
                    }}
                </p>
            </template>
            <PrimaryButton class="error-cta" @click="handleError">{{ t('Retour à l’accueil') }}</PrimaryButton>
        </div>
    </NuxtLayout>
</template>

<style lang="postcss">
.shape-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background-color: var(--teal-500);
    @media (--lg) {
        width: 250px;
        height: 250px;
    }
}
.asterisk {
    fill: var(--beige-100);
    width: 75%;
}
.error-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    padding: 0 16px;
    gap: 24px 32px;
    margin-bottom: 64px;
    min-height: 60vh;
    @media (--lg) {
        min-height: 100vh;
    }
    .animation-container {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
    }
}
.error-title {
    font-size: rem(32px);
    font-weight: 600;
    max-width: 430px;
    flex-shrink: 0;
    margin: 0;
    text-transform: lowercase;
    @media (--lg) {
        font-size: rem(48px);
    }
}
.error-content {
    display: flex;
    flex-direction: column;
    font-size: rem(16px);
    line-height: 1.777;
    gap: 40px;
    @media (--lg) {
        font-size: rem(18px);
        align-items: flex-start;
        max-width: 668px;
    }
}
.error-cta {
    text-transform: lowercase;
}
</style>

<i18n lang="json">
{
    "en": {
        "Retour à l’accueil": "Back to homepage",
        "Page non trouvée": "Page not found",
        "Désolé, la page que tu cherches n’existe pas ou a été déplacée. Assure-toi que l’url ne comporte par d’erreur ou reviens à l’accueil pour poursuivre ta navigation.": "Sorry, the page you’re looking for doesn’t exist or has been moved. Make sure the URL doesn’t contain any errors, or go back to the homepage to continue browsing.",
        "Une erreur est survenue": "An error occurred",
        "Une erreur inattendue est survenue, réessaie plus tard ou reviens à l’accueil pour poursuivre ta navigation.": "An unexpected error occurred. Please try again later or go back to the homepage to continue browsing."
    }
}
</i18n>
