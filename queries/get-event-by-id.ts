import { gql } from 'graphql-request';

export const GET_EVENT_BY_ID = gql`
    query EventById($communityId: ID!, $eventId: ID!) {
        event(id: $eventId) {
            beginsAt
            endsAt
        }
        planningsV2(
            communityId: $communityId
            filter: {eventIds: [$eventId]}
            cursor: {first: 100}
        ) {
            totalCount
            nodes {
                id
                title
                titleTranslations {
                    language
                    value
                }
                beginsAt
                endsAt
                place
                type
                categories
                speakers {
                    id
                    firstName
                    lastName
                    organization
                }
            }
        }
    }
`;
