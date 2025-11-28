interface Category {
    name: string;
    colors: {
        bg: string;
        text: string;
    };
}

interface Speaker {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    photoUrl: string;
    organization: string;
    jobTitle: string;
    jobTitleTranslations: { language: string; value: string }[];
    biography: string;
    biographyTranslations: { language: string; value: string }[];
}

interface SwapcardSession {
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
    speakerOnPlannings: SwapcardSession[];
}

interface Session {
    id: string;
    title: string;
    beginsAt: string;
    endsAt: string;
    type: string;
    categories: Category[];
    speakers: Speaker[];
}

type ScheduleData = {
    date: string;
    timeslots: {
        type: string;
        time: string;
        places: {
            name: string;
            session: Session;
        }[];
    }[];
};

type SessionData = {
    id: string;
    title: string;
    titleTranslations: { language: string; value: string }[];
    description: string;
    descriptionTranslations: { language: string; value: string }[];
    htmlDescription: string;
    bannerUrl: string;
    categories: Category[];
    place: string;
    date: string;
    beginsAt: string;
    endsAt: string;
    speakers: Speaker[];
};
