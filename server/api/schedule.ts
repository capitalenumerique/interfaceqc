import { GET_EVENT_BY_ID } from '~~/queries/get-event-by-id';
import { getCategoryColor } from '~~/app/utils/categoryColors';
import useSwapcardClient from '../useSwapcardClient';
import { groupBy, uniqBy } from 'es-toolkit';

interface Speaker {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    photoUrl: string;
    organization: string;
    jobTitle: string;
}

interface Session {
    id: string;
    beginsAt: string;
    endsAt: string;
    categories: string[];
    title: string;
    place: string;
    type: string;
}

interface EventPerson {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    biography: string;
    photoUrl: string;
    organization: string;
    jobTitle: string;
    speakerOnPlannings: Session[];
}

interface EventResponse {
    data: {
        eventPerson: {
            nodes: EventPerson[];
        };
    };
}

export default defineEventHandler(async () => {
    const response = (await useSwapcardClient({ query: GET_EVENT_BY_ID })) as EventResponse;

    const speakers: EventPerson[] = response.data.eventPerson.nodes;

    // Forcer les dates vu les données erronnées de Swapcard
    const allowedDates = ['2025-05-27', '2025-05-28', '2025-05-29'];

    // Réorganiser les sessions
    const sessions = speakers.flatMap((speaker) =>
        speaker.speakerOnPlannings
            .filter((session) => allowedDates.includes(session.beginsAt.split(' ')[0])) // Keep only sessions on allowed dates
            .map((session) => ({
                id: session.id,
                date: session.beginsAt.split(' ')[0],
                beginsAt: session.beginsAt.split(' ')[1],
                endsAt: session.endsAt.split(' ')[1],
                title: session.title,
                categories: session.categories,
                place: session.place,
                type: session.type,
                speaker: {
                    id: speaker.id,
                    firstName: speaker.firstName,
                    lastName: speaker.lastName,
                    organization: speaker.organization,
                } as Speaker,
            })),
    );

    // Grouper les sessions par date
    const groupedSessions = groupBy(sessions, (session) => session.date);

    // Définir les créneaux horaire pour la journée
    const baseTimeslotRange = Array.from({ length: 9 }, (_, i) => new Date(0, 0, 0, 9 + i, 0, 0));

    // Créneau spécial avant 9h
    const earlyTimeslot = new Date(0, 0, 0, 7, 30, 0);

    // Extraire les catégories uniques et leur assigner des couleurs
    const allCategories = Array.from(new Set(sessions.flatMap((session) => session.categories)));
    const colorArray = ['red', 'yellow', 'pink', 'blue', 'teal', 'gray', 'orange'];
    const categoryColorMap: Record<string, string> = {};

    allCategories.forEach((category, index) => {
        categoryColorMap[category] = category === 'Keynote' ? 'transparent' : colorArray[index % colorArray.length];
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
    // @TODO: Rendre le code plus lisible, jtel donne Laurent :D
    const sortedResult = Object.keys(groupedSessions)
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
        .map((date) => {
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
            const hasEarlySession = groupedSessions[date].some((session) => {
                const [hour, minute] = session.beginsAt.split(':').map(Number);
                const sessionTime = new Date(0, 0, 0, hour, minute, 0);
                return sessionTime < new Date(0, 0, 0, 9, 0, 0);
            });

            // Ajouter le créneau spécial uniquement si nécessaire
            const dayTimeslotRange = hasEarlySession ? [earlyTimeslot, ...baseTimeslotRange] : [...baseTimeslotRange];

            return {
                date,
                timeslots: dayTimeslotRange.map((slot) => {
                    const timeString = slot.toTimeString().split(' ')[0];

                    // Trouver les sessions de ce créneau horaire
                    const sessionsInTimeslot = groupedSessions[date].filter(
                        (session) => findTimeslot(session.beginsAt, dayTimeslotRange) === timeString,
                    );

                    // Valider s'il s'agit d'une conférence
                    const specialSession = sessionsInTimeslot.find((session) => session.type !== 'Conférence');

                    let places;
                    let type;
                    if (specialSession) {
                        // S'il s'agit d'un autre type que "Conférence", par exemple: un keynote, un atelier au dîner
                        // ou un 5 à 7, elle sera la seule session du créneau horaire
                        places = [
                            {
                                name: specialSession.place,
                                session: {
                                    id: specialSession.id,
                                    title: specialSession.title,
                                    beginsAt: specialSession.beginsAt,
                                    endsAt: specialSession.endsAt,
                                    categories: specialSession.categories.map((category) => ({
                                        name: category,
                                        colors: getCategoryColor(category),
                                    })),
                                    type: specialSession.type,
                                    speakers: uniqBy(
                                        groupedSessions[date]
                                            .filter((s) => s.title === specialSession.title)
                                            .map((s) => s.speaker),
                                        (speaker) => speaker.id,
                                    ),
                                },
                            },
                        ];
                        type = 'special';
                    } else {
                        // Conférences par défaut
                        places = uniquePlaces.map((place) => {
                            const sessionInPlace = sessionsInTimeslot.find((session) => session.place === place);
                            return {
                                name: place,
                                session: sessionInPlace
                                    ? {
                                          id: sessionInPlace.id,
                                          title: sessionInPlace.title,
                                          beginsAt: sessionInPlace.beginsAt,
                                          endsAt: sessionInPlace.endsAt,
                                          categories: sessionInPlace.categories.map((category) => ({
                                              name: category,
                                              colors: getCategoryColor(category),
                                          })),
                                          type: sessionInPlace.type,
                                          speakers: uniqBy(
                                              groupedSessions[date]
                                                  .filter((s) => s.title === sessionInPlace.title)
                                                  .map((s) => s.speaker),
                                              (speaker) => speaker.id,
                                          ),
                                      }
                                    : null,
                            };
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
