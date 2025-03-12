import { Movie } from "../types";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjNlMDdmNWY5ZmZmYmZkZDdjNWZjNDQxMGY4MzU0ZiIsIm5iZiI6MTU1MDQxMzEwMy41NDcwMDAyLCJzdWIiOiI1YzY5NmQyZjkyNTE0MTdkZjQwNDE0OTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kjEgvXZiIApfzW8_hhoyav3Q-C5WQqbDbadhAXxoaZs'
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
