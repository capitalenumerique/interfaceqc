<template>
    <section class="newsletter-section">
        <div class="newsletter-text-wrapper">
            <h2 class="newsletter-title">{{ t('infolettre') }}</h2>
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
                :placeholder="t('adresse@exemple.com')"
            />
            <PrimaryButton class="form-submit" type="submit" small>{{ t('m’inscrire') }}</PrimaryButton>
        </form>
    </section>
    <footer class="footer">
        <div class="footer-content">
            <div class="column">
                <span class="column-icon"><IconStar width="24" /></span>
                <ul class="column-list">
                    <li><a href="mailto:info@interfaceqc.com">info@interfaceqc.com</a></li>
                    <!-- @TODO: Ajout les vrais liens lorsque les pages existeront -->
                    <li><a href="#">partenaires</a></li>
                    <li><a href="#">faq</a></li>
                </ul>
            </div>
            <div v-show="false" class="column">
                <span class="column-icon"><IconHexagon width="18" /></span>
                <ul class="column-list">
                    <li v-for="(archive, i) in archives" :key="`archive-${i}`">
                        <a :href="`/programmation/${archive.year}`">
                            {{ t('édition {year}', { year: archive.year }) }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="column">
                <ul class="socials-list">
                    <li v-for="(social, i) in socials" :key="`social-${i}`">
                        <a class="social-link" :href="social.link" target="_blank" :aria-label="social.name">
                            <component :is="social.icon" width="32" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Vue3Marquee>
            <img class="logo" src="@/assets/svg/logo-with-star.svg" alt="interface" />
        </Vue3Marquee>
        <div class="credits-wrapper">
            <div class="credits">
                <span>
                    <a href="https://capitalenumerique.com/politique-de-confidentialite/" target="_blank">
                        {{ t('Politique de confidentialité') }}
                    </a>
                    | © Interface - Québec {{ new Date().getFullYear() }}. {{ t('Tous droits réservés.') }}
                </span>
                <span>
                    <template v-if="$config.public.commitTag || $config.public.commitShortSha">Version:</template>
                    {{ $config.public.commitTag }}
                    {{
                        $config.public.commitTag ? `(${$config.public.commitShortSha})` : $config.public.commitShortSha
                    }}
                </span>
            </div>
            <ul class="organizers">
                <li>
                    <a href="https://capitalenumerique.com/" target="_blank">
                        <img src="@/assets/img/capitale-numerique.png" alt="Capitale Numérique" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import IconLemon from '@/assets/svg/shapes/lemon.svg?component';
import IconStar from '@/assets/svg/shapes/star.svg?component';
import IconFacebook from '@/assets/svg/facebook.svg?component';
import IconHexagon from '@/assets/svg/shapes/hexagon.svg?component';
import IconInstagram from '@/assets/svg/instagram.svg?component';
import IconLinkedin from '@/assets/svg/linkedin.svg?component';

const { t } = useI18n();

const socials = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/interfaceqc',
        icon: IconFacebook,
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/interfaceqc',
        icon: IconInstagram,
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/company/interfaceqc/',
        icon: IconLinkedin,
    },
];

// @TODO: À dynamiser lorsqu'on aura déterminer la logique des archives
// et qu'il y aura au moins une édition passée
const archives = [
    {
        year: 2024,
    },
];
</script>

<style lang="postcss" scoped>
.newsletter-section {
    display: flex;
    margin: 80px 0;
    flex-direction: column;
    @media (--md) {
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
    @media (--md) {
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
    @media (--md) {
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
        @media (--md) {
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
.email-input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--gray-300);
    padding: 10px 14px;
}
.form-submit {
    width: 100%;
}
.footer {
    background-color: var(--gray-900);
    border-radius: 24px 24px 0 0;
    color: var(--beige-100);
    @media (--md) {
        border-radius: 40px 40px 0 0;
    }
}
.footer-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 48px 16px;
    max-width: 1240px;
    margin: auto;
    gap: 48px 24px;
    @media (--md) {
        padding: 80px 40px;
        flex-direction: row;
    }
}
.newsletter-title {
    font-size: rem(18px);
    margin-bottom: 8px;
    font-weight: 500;
    @media (--md) {
        margin-bottom: 16px;
    }
}
.newsletter-text {
    font-size: rem(30px);
    margin: 0;
    @media (--md) {
        font-size: rem(48px);
    }
}
.socials-list {
    list-style: none;
    display: flex;
    gap: 40px;
    padding: 0;
    margin: 0;
}
.social-link {
    color: var(--beige-100);
    transition: color var(--hover-transition);
    &:hover,
    &:focus-visible {
        color: var(--yellow-200);
    }
}
.column-icon {
    display: flex;
    align-items: center;
    height: rem(36px);
    svg {
        fill: var(--yellow-200);
    }
}
.column-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
    margin-top: 24px;
    font-size: rem(14px);
    @media (--md) {
        margin-top: 48px;
        font-size: rem(16px);
    }
    a {
        color: var(--beige-100);
        text-decoration: none;
        font-weight: 500;
        &:hover,
        &:focus-visible {
            text-decoration: underline;
        }
    }
}
.logo {
    width: 100%;
    max-width: none;
    height: 200px;
    padding: 0 0 18px 50px;
    border-bottom: 1px solid var(--yellow-200);
    @media (--md) {
        padding-bottom: 24px;
        height: auto;
    }
}
.credits-wrapper {
    padding: 48px 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 48px;
    @media (--md) {
        padding: 40px;
        flex-direction: row;
    }
}
.credits {
    font-size: rem(12px);
    a {
        color: var(--beige-100);
        &:hover,
        &:focus-visible {
            text-decoration: none;
        }
    }
}
.organizers {
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 32px;
    @media (--md-down) {
        order: -1;
    }
}
</style>

<i18n lang="json">
{
    "en": {
        "infolettre": "newsletter",
        "Pour tout savoir, l’infolettre est le secret le moins bien gardé.": "To know everything, the newsletter is the worst-kept secret.",
        "Adresse courriel": "Email address",
        "adresse{'@'}exemple.com": "address{'@'}example.com",
        "édition {year}": "{year} edition",
        "Tous droits réservés.": "All rights reserved."
    }
}
</i18n>
