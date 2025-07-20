const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function markMovieAsMovieToWatchAPI(
  user_id: number,
  movie_id: number,
  title: string,
  release_date?: string,
  poster?: string,
  accessToken?: string
) {
    const query = `
        mutation {
            markMovieAsMovieToBeWatched(
                input:{
                    movie_id_from_api: ${movie_id},
                    user_id: ${user_id}
                    title: "${title}"
                    release_date: "${release_date}"
                    poster: "${poster}"
                }
            )
            {
                user_id
                movie_id
            }
        }
    `;
    const response = await fetch(`${BASE_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify({ query }),
    });
    
    const result = await response.json();
    
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

  return result;
}