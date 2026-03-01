<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
    <section class="newsletter-section">
        <div class="newsletter-content">
            <div class="newsletter-text-wrapper">
                <h2 class="newsletter-title">{{ t('Infolettre') }}</h2>
                <p class="newsletter-text">
                    {{
                        t(
                            'Pour des nouveautés, des promotions, du contenu exclusif et une bonne dose d’Interface, abonne-toi à notre infolettre!',
                        )
                    }}
                </p>
            </div>
            <form
                class="newsletter-form"
                action="https://l.c.capitalenumerique.com/T/WF/29582/hiWyAo/Optin/fr-CA/Form.ofsys"
                method="GET"
            >
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
        </div>
    </section>
</template>

<style lang="postcss" scoped>
.newsletter-section {
    max-width: var(--page-container-max-width);
    margin: 80px auto;
    padding: 0 16px;
    @media (--md) {
        padding: 0 32px;
    }
}
.newsletter-content {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background-color: var(--color-secondary);
    padding: 32px 16px;
    gap: 40px;
    @media (--lg) {
        padding: 40px;
        flex-direction: row;
        align-items: center;
    }
}
.newsletter-text-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
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
.newsletter-title {
    display: inline-block;
    font-size: rem(14px);
    margin-bottom: 8px;
    font-weight: 500;
    text-transform: lowercase;
    background-color: var(--color-white);
    border-radius: 8px;
    padding: 8px 16px;
}
.newsletter-text {
    font-size: rem(30px);
    line-height: 1.25;
    font-weight: 500;
    margin: 0;
    letter-spacing: -1px;
    line-height: 1.1;
    @media (--lg) {
        font-size: rem(40px);
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
        "Pour des nouveautés, des promotions, du contenu exclusif et une bonne dose d’Interface, abonne-toi à notre infolettre!": "For news, promotions, exclusive content and a healthy dose of Interface, subscribe to our newsletter!",
        "Adresse courriel": "Email address",
        "adresse{'@'}exemple.com": "email{'@'}example.com",
        "m’inscrire": "register"
    }
}
</i18n>
