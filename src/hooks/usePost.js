import { useState } from 'react';
import apiClient from '../api/apiClient';

const usePost = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const postData = async (request) => {
        setLoading(true);
        setError(null);
        try {
            const result = await apiClient.post(endpoint, request);
            setData(result.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };
    return { data, loading, error, postData };
};

export default usePost;
