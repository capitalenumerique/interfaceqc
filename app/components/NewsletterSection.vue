<template>
    <section class="newsletter-section">
        <div class="newsletter-text-wrapper">
            <h2 class="newsletter-title">{{ t('Infolettre') }}</h2>
            <p class="newsletter-text">
                {{ t('Pour tout savoir, l’infolettre est le secret le moins bien gardé.') }}
            </p>
        </div>
        <form
            class="newsletter-form"
            action="https://l.c.capitalenumerique.com/T/WF/29582/hiWyAo/Optin/fr-CA/Form.ofsys"
            method="GET"
        >
            <IconLemon class="lemon-icon" width="40" />
            <label class="sr-only" for="email-address">{{ t('Adresse courriel') }}</label>
            <input
                id="email-address"
                class="email-input"
                name="BF_Form_f_EMail"
                type="email"
                :placeholder="t('adresse{\'@\'}exemple.com')"
            />
            <PrimaryButton class="form-submit" type="submit" small>{{ t('m’inscrire') }}</PrimaryButton>
        </form>
    </section>
</template>

<script lang="ts" setup>
import IconLemon from '@/assets/svg/shapes/lemon.svg?component';
const { t } = useI18n();
</script>

<style lang="postcss" scoped>
.newsletter-section {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    max-width: 1272px;
    padding: 80px 16px;
    @media (--lg) {
        flex-direction: row;
    }
}
.newsletter-text-wrapper,
.newsletter-form {
    position: relative;
    border-radius: 20px;
    background-color: var(--beige-100);
    border: 1px solid var(--gray-900);
    padding: 40px 16px;
    @media (--lg) {
        padding: 48px 32px;
        border-radius: 40px;
    }
}
.newsletter-text-wrapper {
    flex-grow: 1;
}
.newsletter-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    max-width: 100%;
    margin-top: -1px;
    @media (--lg) {
        min-width: 375px;
        margin: 0 0 0 -1px;
    }
    &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: -2px;
        width: calc(100% - 35px);
        height: 3px;
        transform: translateX(-50%);
        background-color: var(--beige-100);
        @media (--lg) {
            top: 50%;
            left: -2px;
            width: 3px;
            height: calc(100% - 65px);
            transform: translateY(-50%);
        }
    }
}
.lemon-icon {
    fill: var(--red-500);
}
.newsletter-title {
    font-size: rem(18px);
    margin-bottom: 8px;
    font-weight: 500;
    text-transform: lowercase;
    @media (--lg) {
        margin-bottom: 16px;
    }
}
.newsletter-text {
    font-size: rem(30px);
    margin: 0;
    @media (--lg) {
        font-size: rem(48px);
    }
}
.email-input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--gray-300);
    padding: 10px 14px;
}
.form-submit {
    width: 100%;
}
</style>

<i18n lang="json">
{
    "en": {
        "Infolettre": "Newsletter",
        "Pour tout savoir, l’infolettre est le secret le moins bien gardé.": "To know everything, the newsletter is the worst-kept secret.",
        "Adresse courriel": "Email address",
        "adresse{'@'}exemple.com": "email{'@'}example.com",
        "m’inscrire": "register"
    }
}
</i18n>
