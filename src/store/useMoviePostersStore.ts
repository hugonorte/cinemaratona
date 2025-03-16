import { create } from "zustand";
import { fetchMoviePostersFromAPI } from "../api/moviePoster"; 
import { MoviePosterState } from "../types";

export const useMoviePostersStore = create<MoviePosterState>((set) => ({
  moviePoster: null,

  fetchMoviePosters: async (movie_id: number) => {
    const moviePoster = await fetchMoviePostersFromAPI(movie_id);
    set({ moviePoster });
  },
}));