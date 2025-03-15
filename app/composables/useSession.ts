const useSession = (sessionId: string) => {
    const { data, error, suspense, isFetching } = useQuery({
        queryKey: ['session', sessionId],
        queryFn: () => $fetch(`/api/session?id=${sessionId}`),
        enabled: !!sessionId,
    });

    return {
        data,
        error,
        suspense,
        isLoading: isFetching,
    };
};

export default useSession;
