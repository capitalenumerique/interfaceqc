<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="column">
                <span class="column-icon"><IconAsterisk width="24" /></span>
                <ul class="column-list">
                    <li>
                        <a href="mailto:info@interfaceqc.com">{{ t("info{'@'}interfaceqc.com") }}</a>
                    </li>
                    <!-- @TODO: Ajout les vrais liens lorsque les pages existeront -->
                    <!-- <li>
                        <a href="#">{{ t('Partenaires') }}</a>
                    </li> -->
                    <li>
                        <NuxtLinkLocale to="faq">{{ t('Faq') }}</NuxtLinkLocale>
                    </li>
                </ul>
            </div>
            <!-- <div class="column">
                <span class="column-icon"><IconHexagon width="18" /></span>
                <ul class="column-list">
                    <li v-for="(archive, i) in archives" :key="`archive-${i}`">
                        <a :href="`/programmation/${archive.year}`">
                            {{ t('Édition {year}', { year: archive.year }) }}
                        </a>
                    </li>
                </ul>
            </div> -->
            <div class="column">
                <ul class="socials-list">
                    <li v-for="(social, i) in socials" :key="`social-${i}`">
                        <a class="social-link" :href="social.link" target="_blank" :aria-label="social.name">
                            <component :is="social.icon" width="32" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="column">
                <img
                    class="quebec-city-logo"
                    src="@/assets/img/ville-quebec.svg"
                    :alt="t('Ville de Québec l’accent d’Amérique')"
                />
                <p class="quebec-city-text">
                    {{
                        t(
                            'Ce projet est réalisé grâce au soutien financier de la Vision Entrepreneuriale Québec 2026 de la Ville de Québec',
                        )
                    }}
                </p>
            </div>
        </div>
        <ClientOnly v-if="showMarquee">
            <Vue3Marquee>
                <img class="logo" src="@/assets/svg/logo-with-glyph.svg" :alt="t('interface')" />
            </Vue3Marquee>
        </ClientOnly>
        <img v-else class="logo" src="@/assets/svg/logo-with-glyph.svg" :alt="t('interface')" />
        <div class="credits-wrapper">
            <div class="credits">
                <span>
                    <a href="https://capitalenumerique.com/politique-de-confidentialite/" target="_blank">
                        {{ t('Politique de confidentialité') }}
                    </a>
                    | {{ t('© Interface - Québec {n}. Tous droits réservés.', new Date().getFullYear()) }}&nbsp;
                </span>
                <span>
                    <template v-if="$config.public.commitTag || $config.public.commitShortSha">
                        {{ t('Version:') }}
                    </template>
                    <span v-if="$config.public.commitTag">&nbsp;{{ $config.public.commitTag }}</span>
                    <span
                        >&nbsp;{{
                            $config.public.commitTag
                                ? `(${$config.public.commitShortSha})`
                                : $config.public.commitShortSha
                        }}</span
                    >
                </span>
            </div>
            <ul class="organizers">
                <li>
                    <a class="organizer-link" href="https://capitalenumerique.com/" target="_blank">
                        <span class="support-label">{{ t('supporté par') }}</span>
                        <img src="@/assets/img/capitale-numerique.svg" :alt="t('Capitale Numérique')" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { useBreakpoints } from '@vueuse/core';
import IconAsterisk from '@/assets/svg/shapes/asterisk.svg?component';
import IconFacebook from '@/assets/svg/facebook.svg?component';
import IconInstagram from '@/assets/svg/instagram.svg?component';
import IconLinkedin from '@/assets/svg/linkedin.svg?component';

const { t } = useI18n();
const breakpoints = useBreakpoints({ lg: 1024 }, { ssrWidth: 1024 });
const showMarquee = breakpoints.smaller('lg');

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
// const archives = [
//     {
//         year: 2024,
//     },
// ];
</script>

<style lang="postcss" scoped>
.footer {
    background-color: var(--gray-900);
    border-radius: 24px 24px 0 0;
    color: var(--beige-100);
    @media (--md) {
        position: sticky;
        bottom: 0;
        border-radius: 40px 40px 0 0;
    }
}
.footer-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 48px 16px;
    max-width: var(--page-container-max-width);
    margin: auto;
    gap: 48px 24px;
    @media (--md) {
        padding: 80px 40px;
    }
    @media (--lg) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
.socials-list {
    list-style: none;
    display: flex;
    gap: 40px;
    padding: 0;
    margin: 0;
    @media (--lg) {
        justify-content: center;
        align-items: center;
        height: 100%;
    }
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
        text-transform: lowercase;
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
        padding: 0 0 24px;
        height: auto;
    }
}
.quebec-city-logo {
    display: block;
    @media (--lg) {
        margin-left: auto;
    }
}
.quebec-city-text {
    font-size: rem(12px);
    text-wrap: balance;
    max-width: 275px;
    @media (--lg) {
        text-align: right;
        margin-left: auto;
    }
}
.credits-wrapper {
    padding: 48px 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 48px;
    @media (--md) {
        padding: 16px 32px;
        flex-direction: row;
        align-items: center;
    }
}
.credits {
    gap: 4px;
    font-size: rem(12px);
    margin-right: 64px;
    @media (--md) {
        margin-right: 0;
    }
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
    margin-right: 48px;
    @media (--md-down) {
        order: -1;
        margin-left: auto;
        margin-right: 0;
    }
}
.organizer-link {
    color: var(--color-white);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
}
.support-label {
    font-size: rem(12px);
    margin-bottom: 4px;
}
</style>

<i18n lang="json">
{
    "en": {
        "Partenaires": "Partners",
        "Faq": "Faq",
        "Politique de confidentialité": "Privacy policy",
        "Édition {year}": "{year} edition",
        "Ce projet est réalisé grâce au soutien financier de la Vision Entrepreneuriale Québec 2026 de la Ville de Québec": "This project is made possible thanks to the financial support of Québec City’s Vision Entrepreneuriale Québec 2026.",
        "supporté par": "supported by",
        "© Interface - Québec {n}. Tous droits réservés.": "© Interface - Québec {n}. All rights reserved."
    }
}
</i18n>
