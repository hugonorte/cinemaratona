import { create } from "zustand";
import { fetchMovieDetailsFromAPI } from "../api/movieDetails"; 
import { MovieDetailsState } from "../types";

export const useMovieDetailsStore = create<MovieDetailsState>((set) => ({
  movieDetails: null,

  fetchMovieDetails: async (movie_id: number) => {
    const movieDetails = await fetchMovieDetailsFromAPI(movie_id);
    set({ movieDetails });
  },
}));