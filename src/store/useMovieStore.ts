import { create } from "zustand";
import { fetchMoviesFromAPI } from "../api/movieApi"; 
import { MovieState } from "../types";

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  fetchMovies: async (title?: string) => {
    if (!title) return;
    const movies = await fetchMoviesFromAPI(title);
    set({ movies });
  },
  isLoading: false
}));
