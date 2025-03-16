import { Movie } from "../types";
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMovieDetailsFromAPI = async (movie_id: number): Promise<Movie | null> => {
  try {
    const response = await fetch(`${BASE_URL}/${movie_id}?language=pt-br`, options);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao encontrar filme:", error);
    return null;
  }
};

