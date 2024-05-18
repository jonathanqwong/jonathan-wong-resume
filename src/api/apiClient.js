import axios from 'axios';
// import { EXPRESS_RESUME_API_ENDPOINT } from '../configuration/config';

const apiClient = axios.create({
    baseURL: 'https://us-central1-jonathan-wong-resume-api.cloudfunctions.net/api',
    headers: {
        'Content-Type': 'application/json',
    },
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

// Add more API methods as needed
export default apiClient;
