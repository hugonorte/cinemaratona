import { refreshTokenApi } from './refreshTokenApi';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchWithAuth = async (query: string, variables : string[] | null = null): Promise<unknown> => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
        body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();

    if (result.errors && result.errors[0].message.includes('Unauthenticated')) {
        // Try refreshing token
        const { access_token } = await refreshTokenApi(localStorage.getItem('refreshToken'));
        localStorage.setItem('accessToken', access_token);
        return fetchWithAuth(query, variables); // Retry with new token
    }
    if (result.errors) {
        throw new Error(result.errors[0].message);
    }
    return result.data;
};