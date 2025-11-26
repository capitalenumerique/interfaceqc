import type { TypedInternalResponse, NitroFetchRequest } from 'nitropack';
type Props = {
    query: string;
    variables?: Record<string, unknown>;
};

export default async function useSwapcardClient<T>({
    query,
    variables = {},
}: Props): Promise<TypedInternalResponse<NitroFetchRequest, T, 'get'>> {
    const config = useRuntimeConfig();

    const response = await $fetch<T>(config.public.swapcardGraphqlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${config.swapcardToken}`,
        },
        body: {
            query,
            variables: { eventId: config.swapcardEventId, ...variables },
        },
    });

    return response;
}
