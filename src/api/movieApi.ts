import { Movie } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMoviesFromAPI = async (title: string): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}?query=${title}`, options);
    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return [];
  }
};
