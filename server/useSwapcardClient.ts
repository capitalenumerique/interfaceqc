type Props = {
    query: string;
    variables?: Record<string, unknown>;
};

const useSwapcardClient = async ({ query, variables = {} }: Props) => {
    const config = useRuntimeConfig();

    const response = await $fetch(config.public.swapcardGraphqlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${config.swapcardToken}`, // Secure API key
        },
        body: JSON.stringify({
            query,
            variables: { eventId: config.swapcardEventId, ...variables },
        }),
    });

    return response;
};

export default useSwapcardClient;
