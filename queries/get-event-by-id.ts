import { gql } from 'graphql-request';

export const GET_EVENT_BY_ID = gql`
    query EventById($eventId: ID!) {
        eventPerson(eventId: $eventId, cursor: { first: 200 }) {
            nodes {
                id
                firstName
                lastName
                organization
                speakerOnPlannings {
                    id
                    beginsAt
                    endsAt
                    categories
                    place
                    title
                    titleTranslations {
                        language
                        value
                    }
                    type
                }
            }
        }
    }
`;
