const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function createReviewAPI(
    token: string,
    input: {
        review?: string;
        rating?: number;
        user_id: number;
        movie_id_from_api: number;
        title: string;
        release_date: string;
        poster: string;
    }) {
    const { review, rating, user_id, movie_id_from_api, title, release_date, poster } = input;
    const query = `
            mutation {
                createReview(input: {
                    review: "${review}"
                    rating: ${rating}
                    user_id: ${user_id}
                    movie_id_from_api: ${movie_id_from_api}
                    title:"${title}"
                    release_date: "${release_date}" 
                    poster: "${poster}"
            }) {
                id
                review
                }
            }
        `;

    const response = await fetch(`${BASE_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ query, variables: { input } }),
    });

    const result = await response.json();

    if (result.errors) {
        throw new Error(result.errors[0].message);
    }

    return result.data.createReview;
}
