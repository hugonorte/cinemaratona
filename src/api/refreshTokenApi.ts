const BASE_URL = import.meta.env.VITE_BASE_URL;

export const refreshTokenApi = async () => {
    const response = await fetch(`${BASE_URL}/graphql`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                mutation {
                    refreshToken {
                        access_token
                        user {
                            id
                            name
                        }
                    }
                }
            `,
            
        }),
    });

    const result = await response.json();
    
    if (result.errors) {
        throw new Error(result.errors[0].message);
    }
    return result.data.refreshToken;
}