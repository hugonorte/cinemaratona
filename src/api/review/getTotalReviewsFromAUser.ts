const BASE_URL = import.meta.env.VITE_BASE_URL;

type TotalReviews = {
    total: number;
    user_id: number | null;
}


export async function getTotalReviewsFromAUser(
    userId: number,
): Promise<TotalReviews> {
    const query = `
        query {
            TotalEvaluatedMoviesByUser(user_id: ${userId}) {
                total
                user_id
            }
        }
    `;
  try {
    const response = await fetch(`${BASE_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching movie reviews: ${response.statusText}`);
    }
    
    const data = await response.json();
    const result = data?.data?.TotalEvaluatedMoviesByUser;
    return {
      total: result?.total ?? 0,
      user_id: result?.user_id ?? null,
    };
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
}