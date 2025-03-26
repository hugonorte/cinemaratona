import { Movie } from "../types";

const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMultipleMoviesDetailsFromAPI = async (movieIds: number[]): Promise<Movie[]> => {
  try {
    const requests = movieIds.map((id) =>
      fetch(`${BASE_URL}/${id}?language=pt-br`, options).then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição para o filme ${id}: ${response.status}`);
        }
        return response.json();
      })
    );

    const movies = await Promise.all(requests);
    return movies;
  } catch (error) {
    console.error("Erro ao buscar detalhes dos filmes:", error);
    return [];
  }
};
