const BASE_URL = import.meta.env.VITE_BASE_URL;

export const refreshTokenApi = async (refreshToken : string | null) => {
    const response = await fetch(`${BASE_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                mutation RefreshToken($refresh_token: String!) {
                    refreshToken(refresh_token: $refresh_token) {
                        access_token
                        refresh_token
                        user {
                            id
                            name
                            email
                        }
                    }
                }
            `,
            variables: { refresh_token: refreshToken },
        }),
    });

    const result = await response.json();
    
    if (result.errors) {
        throw new Error(result.errors[0].message);
    }
    return result.data.refreshToken;
}