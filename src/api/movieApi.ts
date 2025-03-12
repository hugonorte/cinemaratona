import { Movie } from "../types";
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
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
