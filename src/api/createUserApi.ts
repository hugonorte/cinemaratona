const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function createUserAPI(name: string, email: string, password: string) {
    const query = `
        mutation {
            createUser(name: "${name}", email: "${email}", password: "${password}") {
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
        },
        body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors[0].message);
    }

    return result.data.createUser;
}
