import { gql } from 'graphql-request';

export const GET_SESSION_BY_ID = gql`
    query EventById($eventId: ID!, $sessionId: [ID!]) {
        eventPerson(eventId: $eventId, filters: { shouldBeSpeakerOnPlannings: $sessionId }) {
            nodes {
                id
                firstName
                lastName
                jobTitleTranslations {
                    language
                    value
                }
                jobTitle
                photoUrl
                organization
                biography
                biographyTranslations {
                    language
                    value
                }
                speakerOnPlannings {
                    id
                    beginsAt
                    endsAt
                    descriptionTranslations {
                        language
                        value
                    }
                    bannerUrl
                    description
                    htmlDescription
                    categories
                    place
                    title
                    titleTranslations {
                        language
                        value
                    }
                }
            }
        }
    }
`;
