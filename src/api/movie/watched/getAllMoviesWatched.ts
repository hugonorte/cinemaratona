const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllMoviesWatched(
    userId: number,
) {
    const query = `
        query {
            watchedMoviesByUser(user_id: ${userId}) {
                total
                movies {
                    id
                    movie_id_from_api
                    title
                    release_date
                    poster
                }
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
      throw new Error(`Error fetching watched movies: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.data.watchedMoviesByUser;
  } catch (error) {
    console.error('Failed to fetch watched movies:', error);
    throw error;
  }
}