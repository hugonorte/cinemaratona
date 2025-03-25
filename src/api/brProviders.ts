import { BrProvider } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchBrProvidersFromAPI = async (movie_id: number): Promise<BrProvider> => {
  try {
    const response = await fetch(`${BASE_URL}/${movie_id}/watch/providers`, options);
    const data = await response.json();

    return data.results.BR || null;
  } catch (error) {
    console.error("Erro ao buscar Provedores Brasileiros:", error);
    return {} as BrProvider;
  }
};
