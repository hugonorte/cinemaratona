import { Staff } from "../types";
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  };
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchCastFromAPI = async (movie_id: number): Promise<Staff> => {
  try {
    const response = await fetch(`${BASE_URL}/${movie_id}/credits?language=pt-br`, options);
    const data = await response.json();

    return data || null;
  } catch (error) {
    console.error("Erro ao buscar Elenco:", error);
    return {} as Staff;
  }
};
