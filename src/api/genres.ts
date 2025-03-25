import { Genre } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/genre/movie/list";

export const fetchGenresFromAPI = async (): Promise<Genre[]> => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${apiKey}&language=pt-BR`, options);
    const data = await response.json();

    return data.genres || [];
  } catch (error) {
    console.error("Erro ao buscar gêneros:", error);
    return [];
  }
};
