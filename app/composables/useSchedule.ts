const useSchedule = () => {
    const { data, error, suspense, isLoading } = useQuery({
        queryKey: ['schedule'],
        queryFn: () => $fetch('/api/schedule'),
    });

    return {
        data,
        error,
        suspense,
        isLoading,
    };
};

export default useSchedule;
