import { create } from "zustand";
import { fetchMoviesByGenreAndStreamingFromAPI } from "../api/topMoviesByGenreAndStreaming"; 
import { MovieState } from "../types";

export const useMovieByGenreAndStreamingStore = create<MovieState>((set) => ({
  movies: [],
  fetchMovies: async (_title?: string, genre_id?: number, provider_id?: number) => {
    const movies = await fetchMoviesByGenreAndStreamingFromAPI(genre_id ?? 0, provider_id ?? 0);
    set({ movies });
  },
}));
