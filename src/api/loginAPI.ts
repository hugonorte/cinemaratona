export const loginUser = async (email: string, password: string) => {
    const response = await fetch('http://localhost/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                mutation {
                    login(
                        email: "${email}",
                        password: "${password}"
                    ) {
                        access_token
                        user {
                            id
                            name
                            email
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
    return result.data.login;
};