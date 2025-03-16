import { MoviePoster } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMoviePostersFromAPI = async (movie_id: number): Promise<MoviePoster | null> => {
  try {
    const response = await fetch(`${BASE_URL}/${movie_id}/images?include_image_language=pt`, options);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao encontrar o poster do filme:", error);
    return null;
  }
};

