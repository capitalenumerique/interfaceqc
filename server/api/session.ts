import { GET_SESSION_BY_ID } from '~~/queries/get-session-by-id';
import { getCategoryColor } from '~~/app/utils/categoryColors';
import useSwapcardClient from '../useSwapcardClient';

type Session = {
    id: string;
    beginsAt: string;
    endsAt: string;
    description: string;
    descriptionTranslations: { language: string; value: string }[];
    htmlDescription: string;
    categories: string[];
    place: string;
    title: string;
    titleTranslations: { language: string; value: string }[];
};

type EventPerson = {
    id: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    jobTitleTranslations: { language: string; value: string }[];
    photoUrl: string | null;
    organization: string;
    biography: string | null;
    biographyTranslations: { language: string; value: string }[];
    speakerOnPlannings: Session[];
};

type SessionResponse = {
    data: {
        eventPerson: {
            nodes: EventPerson[];
        };
    };
};

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const sessionId = query.id as string;

    const response = (await useSwapcardClient({
        query: GET_SESSION_BY_ID,
        variables: { sessionId },
    })) as SessionResponse;

    const speakers: EventPerson[] = response.data.eventPerson.nodes;

    // Extraire les informations de la session
    const session = speakers.flatMap((speaker) => speaker.speakerOnPlannings).find((s) => s.id === sessionId);

    if (!session) return {};

    // Remanier les données pour l'affichage
    return {
        id: session.id,
        title: session.title,
        titleTranslations: session.titleTranslations,
        description: session.description,
        descriptionTranslations: session.descriptionTranslations,
        htmlDescription: session.htmlDescription,
        categories: session.categories.map((category) => ({
            name: category,
            colors: getCategoryColor(category),
        })),
        place: session.place,
        date: session.beginsAt.split(' ')[0],
        beginsAt: session.beginsAt.split(' ')[1],
        endsAt: session.endsAt.split(' ')[1],
        speakers: speakers.map((person) => ({
            id: person.id,
            firstName: person.firstName,
            lastName: person.lastName,
            jobTitle: person.jobTitle,
            jobTitleTranslations: person.jobTitleTranslations,
            photoUrl: person.photoUrl,
            organization: person.organization,
            biography: person.biography,
            biographyTranslations: person.biographyTranslations,
        })),
    };
});
