import { StreamingProvider } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/watch/providers/movie";

export const fetchStreamingProvidersFromAPI = async (): Promise<StreamingProvider[]> => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${apiKey}&language=pr-br&watch_region=BR`, options);
    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar Streaming Provider:", error);
    return [];
  }
};
