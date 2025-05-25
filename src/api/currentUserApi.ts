import { fetchWithAuth } from './authFetch';

export const getCurrentUserApi = async () => {
    const data = await fetchWithAuth(`
        query {
            me {
                id
                name
                email
            }
        }
    `) as { me: { id: string; name: string; email: string } };
    return data.me;
};