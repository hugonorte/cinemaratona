import { Movie } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/movie/popular";

export const fetchPopularMoviesFromAPI = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}?language=pt-br&page=1&region=BR&vote_average.gte=8&sort_by=popularity.desc`, options);
    const data = await response.json();
    
    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return [];
  }
};
