import { GET_EVENT_BY_ID } from '~~/queries/get-event-by-id';
import { getCategoryColor } from '~~/app/utils/categoryColors';
import useSwapcardClient from '../useSwapcardClient';
import { groupBy } from 'es-toolkit';

interface CategoryColor {
    bg: string;
    text: string;
}

interface CategoryWithColor {
    name: string;
    colors: CategoryColor;
}

interface Session {
    id: string;
    title: string;
    titleTranslations: Array<object>;
    date: string;
    beginsAt: string;
    endsAt: string;
    place: string;
    type: string;
    categories: string[] | CategoryWithColor[];
    speakers: Array<Speaker>;
}

interface Speaker {
    id: string;
    firstName: string;
    lastName: string;
    organization: string;
}

interface EventResponse {
    data: {
        event: {
            beginsAt: string;
            endsAt: string;
        };
        planningsV2: {
            nodes: Session[];
        };
    };
}

export default defineEventHandler(async () => {
    const response = await useSwapcardClient<EventResponse>({ query: GET_EVENT_BY_ID });

    // Grouper les sessions par date
    const sessions = response.data.planningsV2.nodes;
    sessions.forEach((s) => {
        s.date = s.beginsAt.split(' ')[0]!;
        s.beginsAt = s.beginsAt.split(' ')[1]!;
        s.endsAt = s.endsAt.split(' ')[1]!;
    });
    const groupedSessions = groupBy(sessions, (session) => session.date);

    // Définir les créneaux horaire pour la journée
    const baseTimeslotRange = Array.from({ length: 9 }, (_, i) => new Date(0, 0, 0, 9 + i, 0, 0));

    // Créneau spécial avant 9h
    const earlyTimeslot = new Date(0, 0, 0, 7, 30, 0);

    // Extraire les catégories uniques et leur assigner des couleurs
    const allCategories = Array.from(
        new Set(
            sessions.flatMap((session) => {
                if (Array.isArray(session.categories) && session.categories.length > 0) {
                    const firstCat = session.categories[0];
                    if (typeof firstCat === 'string') {
                        return session.categories as string[];
                    }
                }
                return [];
            }),
        ),
    );
    const colorArray = ['red', 'yellow', 'pink', 'blue', 'teal', 'gray', 'orange'];
    const categoryColorMap: Record<string, string> = {};

    allCategories.forEach((category, index) => {
        categoryColorMap[category] =
            category === 'Keynote' ? 'transparent' : (colorArray[index % colorArray.length] ?? 'transparent');
    });

    // Extraire les salles uniques
    const orderedPlaces = ['Grande salle', 'Salle PLG numérique', 'Salle Axeptio', 'Espace Offside'];
    const uniquePlaces = Array.from(
        new Set(
            sessions
                .filter((session) => session.place && session.type === 'Conférence')
                .map((session) => session.place),
        ),
    ).sort((a, b) => {
        // Ordonner les salles selon le array "orderedPlaces"
        const indexA = orderedPlaces.indexOf(a);
        const indexB = orderedPlaces.indexOf(b);

        // Les salles définies dans orderedPlaces viennent avant celles non définies
        return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
    });

    // Ordonner les sessions par date et créneaux horaires
    // Date -> Créneaux -> Salle -> Session
    const sortedResult = Object.entries(groupedSessions).map(([date, sessions]) => {
        const findTimeslot = (time: string, slots: Date[]): string => {
            const [hour, minute] = time.split(':').map(Number);
            const sessionTime = new Date(0, 0, 0, hour, minute, 0);
            return (
                slots
                    .slice()
                    .reverse()
                    .find((slot) => slot <= sessionTime)
                    ?.toTimeString()
                    .split(' ')[0] || '09:00:00'
            );
        };

        // Déterminer si une session spéciale avant 9h existe pour ce jour
        const hasEarlySession = sessions.some((session) => {
            const [hour, minute] = session.beginsAt.split(':').map(Number);
            const sessionTime = new Date(0, 0, 0, hour, minute, 0);
            return sessionTime < new Date(0, 0, 0, 9, 0, 0);
        });

        // Ajouter le créneau spécial uniquement si nécessaire
        const dayTimeslotRange = hasEarlySession ? [earlyTimeslot, ...baseTimeslotRange] : [...baseTimeslotRange];

        // Attribuer des couleurs aux catégories des sessions
        sessions.forEach((s) => {
            if (Array.isArray(s.categories) && s.categories.length > 0) {
                const firstCat = s.categories[0];
                if (typeof firstCat === 'string') {
                    s.categories = (s.categories as string[]).map((category) => ({
                        name: category,
                        colors: getCategoryColor(category),
                    })) as CategoryWithColor[];
                }
            }
        });

        return {
            date,
            timeslots: dayTimeslotRange.flatMap((slot) => {
                const timeString = slot.toTimeString().split(' ')[0];
                const sessionsInTimeslot = sessions.filter(
                    (session) => findTimeslot(session.beginsAt, dayTimeslotRange) === timeString,
                );
                // Ne pas ajouter le créneau s'il n'y a aucune session
                if (sessionsInTimeslot.length === 0) {
                    return [];
                }

                // Valider s'il s'agit d'une conférence
                const specialSession = [...sessionsInTimeslot].find((session) => session.type !== 'Conférence');

                let places;
                let type;
                if (specialSession) {
                    // S'il s'agit d'un autre type que "Conférence", par exemple: un keynote, un atelier au dîner
                    // ou un 5 à 7, elle sera la seule session du créneau horaire
                    places = [
                        {
                            name: specialSession.place,
                            session: specialSession,
                        },
                    ];
                    type = 'special';
                } else {
                    // Conférences par défaut
                    places = uniquePlaces.map((place) => {
                        const sessionInPlace = sessionsInTimeslot.find((session) => session.place === place);
                        if (sessionInPlace) {
                            return {
                                name: place,
                                session: sessionInPlace ? sessionInPlace : null,
                            };
                        } else {
                            // Affichage différent pour le créneau de 13h
                            if (timeString === '13:00:00') {
                                return {
                                    name: place,
                                    session: {
                                        id: `lunch-${place}`,
                                        title: 'Heure de dîner',
                                        beginsAt: '13:00:00',
                                        endsAt: '14:00:00',
                                        categories: [],
                                        type: 'Lunch',
                                        speakers: [],
                                    },
                                };
                            } else {
                                return {
                                    name: place,
                                    session: null,
                                };
                            }
                        }
                    });
                    type = 'regular';
                }

                return {
                    time: timeString,
                    places,
                    type,
                };
            }),
        };
    });

    return sortedResult;
});
