import { create } from "zustand";
import { fetchTopRatedMoviesFromAPI } from "../api/topRated"; 
import { TopRatedMovieState } from "../types";

export const useTopRatedMovieStore = create<TopRatedMovieState>((set) => ({
  topRatedmovies: [],
  fetchTopRatedMovies: async () => {
    const topRatedmovies = await fetchTopRatedMoviesFromAPI();
    set({ topRatedmovies });
  },
}));
