import { create } from "zustand";
import { fetchPopularMoviesFromAPI } from "../api/popular"; 
import { PopularMovieState } from "../types";

export const usePopularMovieStore = create<PopularMovieState>((set) => ({
  popularMovies: [],
  fetchPopularMovies: async () => {
    const popularMovies = await fetchPopularMoviesFromAPI();
    set({ popularMovies });
  },
}));
