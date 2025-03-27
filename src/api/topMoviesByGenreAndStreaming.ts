import { Movie } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

export const fetchMoviesByGenreAndStreamingFromAPI = async (genre_id: number, provider_id:number): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${apiKey}&language=pt-BR&with_genres=${genre_id}&watch_region=BR&with_watch_providers=${provider_id}&vote_average.gte=8&vote_count.gte=250&sort_by=vote_average.desc`, options);
    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar filmes por gênero e provedor:", error);
    return [];
  }
};
