type CategoryColor = { bg: string; text: string };

const CATEGORY_COLORS: Record<string, CategoryColor> = {
    'Art numérique': { bg: 'var(--yellow-200)', text: 'var(--red-600)' },
    'Communication et marketing': { bg: 'var(--blue-700)', text: 'var(--orange-300)' },
    'Design': { bg: 'var(--pink-300)', text: 'var(--green-800)' },
    'Développement': { bg: 'var(--orange-300)', text: 'var(--blue-700)' },
    'Innovation': { bg: 'var(--gray-900)', text: 'var(--pink-300)' },
    'Intelligence artificielle': { bg: 'var(--green-800)', text: 'var(--yellow-200)' },
    'Soft skills': { bg: 'var(--teal-600)', text: 'var(--beige-100)' },
    'Keynote': { bg: 'var(--red-600)', text: 'var(--yellow-200)' },
};

export function getCategoryColor(category: string): CategoryColor {
    return CATEGORY_COLORS[category] || { bg: 'var(--red-600)', text: 'var(--yellow-200)' };
}
