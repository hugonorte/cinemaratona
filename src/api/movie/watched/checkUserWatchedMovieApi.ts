const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function checkUserWatchedMovieAPI(
  user_id: number,
  movie_id: number,
) {
  const query = `
    query {
        checkUserWatchedMovie(
        user_id: ${user_id}, 
        movie_id: ${movie_id})
  }
    `;
  if (!user_id || !movie_id) {
    return null;
  }
    const response = await fetch(`${BASE_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.checkUserWatchedMovie;
}