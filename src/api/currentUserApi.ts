import { useAuthStore } from "@/store/useAuthStore";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getCurrentUserApi() {
    const token = useAuthStore.getState().accessToken
    const query = `
        query {
            me {
                id
                name
                email
            }
        }
    `;
    const response = await fetch(`${BASE_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({ query, variables: {} }),
    });
    const result = await response.json();
    if (result.errors) {
        throw new Error(result.errors[0].message);
    }
    
    return result.data.me;
};