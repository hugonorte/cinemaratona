import { create } from "zustand";
import { fetchMovieDetailsFromAPI } from "../api/movieDetails"; 
import { MovieDetailsState } from "../types";

export const useMovieDetailsStore = create<MovieDetailsState>((set) => ({
  movieDetails: null,
  isLoading: false,
  
  fetchMovieDetails: async (movie_id: number) => {
    set({ isLoading: true });
    try {
      const movieDetails = await fetchMovieDetailsFromAPI(movie_id);
      set({ movieDetails });
    } catch (error) {
      console.error("Erro ao buscar detalhes do filme:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));