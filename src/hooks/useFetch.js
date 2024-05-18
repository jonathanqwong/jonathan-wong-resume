import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await apiClient.get(endpoint);
                setData(result.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;
