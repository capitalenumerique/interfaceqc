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
    const baseTimeslotRange = Array.from({ length: 11 }, (_, i) => new Date(0, 0, 0, 9 + i, 0, 0));

    // Créneau spécial avant 9h
    const earlyTimeslot = new Date(0, 0, 0, 8, 0, 0);

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
    const orderedPlaces = [
        'Salle Dialog Insight',
        'Salle C.NUM',
        'Salle Réverbère',
        'Salle Pixel',
        'Barista Destination Québec cité',
    ];
    const uniquePlaces = Array.from(
        new Set(
            sessions
                .filter(
                    (session) =>
                        (session.place && session.type === 'Conférence') ||
                        (session.place && session.type === 'Podcast'),
                )
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

                // Séparer les sessions par type
                const workshopSessions = sessionsInTimeslot.filter((session) => session.type === 'Atelier');
                const podcastSessions = sessionsInTimeslot.filter((session) => session.type === 'Podcast');
                const conferenceSessions = sessionsInTimeslot.filter((session) => session.type === 'Conférence');
                const specialSessions = sessionsInTimeslot.filter(
                    (session) =>
                        session.type !== 'Conférence' && session.type !== 'Podcast' && session.type !== 'Atelier',
                );

                const result = [];
                const [hour] = timeString.split(':').map(Number);
                const isLunchTime = hour >= 12 && hour < 14;

                // 1. Sessions spéciales (Pause, 5 à 7, Keynote, Réseautage, etc.)
                if (specialSessions.length > 0) {
                    const places = [
                        // Ateliers en premier
                        ...workshopSessions.map((workshop) => ({
                            name: workshop.place,
                            session: workshop,
                        })),
                        // Ensuite les conférences/podcasts par salle
                        ...uniquePlaces.map((place) => {
                            const conferenceInPlace = conferenceSessions.find((session) => session.place === place);
                            const podcastInPlace = podcastSessions.find((session) => session.place === place);

                            if (conferenceInPlace) {
                                return { name: place, session: conferenceInPlace };
                            } else if (podcastInPlace) {
                                return { name: place, session: podcastInPlace };
                            } else {
                                return { name: place, session: null };
                            }
                        }),
                    ];
                    specialSessions.forEach((specialSession) => {
                        // Si c'est l'heure du dîner ET qu'il y a des podcasts, on les ajoute ensemble
                        if (isLunchTime && podcastSessions.length > 0) {
                            result.push({
                                time: timeString,
                                places: [
                                    {
                                        name: specialSession.place,
                                        session: specialSession,
                                    },
                                    ...podcastSessions.map((podcast) => ({
                                        name: podcast.place,
                                        session: podcast,
                                    })),
                                    ...(places.some((p) => p.session) ? places : []),
                                ],
                                type: 'special',
                            });
                        } else {
                            result.push({
                                time: timeString,
                                places: [
                                    {
                                        name: specialSession.place,
                                        session: specialSession,
                                    },
                                    ...(places.some((p) => p.session) ? places : []),
                                ],
                                type: 'special',
                            });
                        }
                    });
                }

                // 2. Conférences régulières + Ateliers (JAMAIS pendant l'heure du dîner)
                if (
                    !isLunchTime &&
                    (conferenceSessions.length > 0 || podcastSessions.length > 0 || workshopSessions.length > 0)
                ) {
                    const places = [
                        // Ateliers en premier
                        ...workshopSessions.map((workshop) => ({
                            name: workshop.place,
                            session: workshop,
                        })),
                        // Ensuite les conférences/podcasts par salle
                        ...uniquePlaces.map((place) => {
                            const conferenceInPlace = conferenceSessions.find((session) => session.place === place);
                            const podcastInPlace = podcastSessions.find((session) => session.place === place);

                            if (conferenceInPlace) {
                                return { name: place, session: conferenceInPlace };
                            } else if (podcastInPlace) {
                                return { name: place, session: podcastInPlace };
                            } else {
                                return { name: place, session: null };
                            }
                        }),
                    ];

                    result.push({
                        time: timeString,
                        places,
                        type: 'regular',
                    });
                }

                // 4. Si c'est l'heure du dîner SANS session spéciale, forcer "Dîner" au Bistro
                // if (isLunchTime && specialSessions.length === 0) {
                //     result.push({
                //         time: timeString,
                //         places: [
                //             {
                //                 name: 'Bistro',
                //                 session: {
                //                     id: `lunch-bistro-${timeString}`,
                //                     title: 'Dîner',
                //                     beginsAt: timeString,
                //                     endsAt: '14:00:00',
                //                     place: 'Bistro',
                //                     categories: [],
                //                     type: 'Pause',
                //                     speakers: [],
                //                 },
                //             },
                //             // Ajouter les podcasts s'il y en a
                //             ...podcastSessions.map((podcast) => ({
                //                 name: podcast.place,
                //                 session: podcast,
                //             })),
                //         ],
                //         type: 'special',
                //     });
                // }

                return result;
            }),
        };
    });

    return sortedResult;
});
