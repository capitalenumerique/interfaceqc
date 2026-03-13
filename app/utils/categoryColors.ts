export const CATEGORY_COLORS: Record<string, Category['colors']> = {
    'Communication et marketing': { // @TODO: À changer pour Communication
        bg: 'var(--orange-300)',
        text: 'var(--purple-900)',
    },
    'Créativité numérique': { // @TODO: À changer pour Marketing
        bg: 'var(--blue-900)',
        text: 'var(--purple-300)',
    },
    'Design': { // @TODO: À changer pour Design créatif
        bg: 'var(--orange-900)',
        text: 'var(--yellow-200)',
    },
    'Intelligence artificielle': { // @TODO: À changer pour Design d'expérience
        bg: 'var(--purple-200)',
        text: 'var(--purple-900)',
    },
    'Développement': {
        bg: 'var(--blue-600)',
        text: 'var(--yellow-200)',
    },
    'Innovation': {
        bg: 'var(--purple-100)',
        text: 'var(--orange-600)',
    },
    'Soft skills': { // @TODO: À changer pour Softskills
        bg: 'var(--blue-100)',
        text: 'var(--orange-900)',
    },
    'Keynote': {
        bg: 'var(--orange-800)',
        text: 'var(--purple-100)',
    },
};

export function getCategoryColor(category: string): Category['colors'] {
    return (
        CATEGORY_COLORS[category] || {
            bg: 'var(--red-600)',
            text: 'var(--yellow-200)',
        }
    );
}
