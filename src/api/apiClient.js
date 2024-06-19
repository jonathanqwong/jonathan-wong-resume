import axios from 'axios';
import { EXPRESS_RESUME_API_ENDPOINT } from '../configuration/config';

const apiClient = axios.create({
    baseURL: EXPRESS_RESUME_API_ENDPOINT,
    headers: { 'Content-Type': 'application/json' },
});

export const getData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

export const postData = async (endpoint, request) => {
    try {
        const response = await apiClient.post(endpoint, request);
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

// Add more API methods as needed
export default apiClient;
