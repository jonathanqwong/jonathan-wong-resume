import { useState } from 'react';
import apiClient from '../api/apiClient';

const usePost = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const postData = async (request) => {
        setLoading(true);
        // setError(null);
        try {
            const response = await apiClient.post(endpoint, request);
            setData(response.data);
            setError(null);  // Clear any previous errors
            return { data: response.data };
        } catch (error) {
            setError(error);
            setData(null);  // Clear any previous data
            return { error: error };
        } finally {
            setLoading(false);
        }
    };
    return { data, loading, error, postData };
};

export default usePost;
