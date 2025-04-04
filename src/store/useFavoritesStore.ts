import { create } from "zustand";
import { fetchMultipleMoviesDetailsFromAPI } from "../api/favorites";
import { Movie } from "../types";

interface FavoritesState {
  moviesDetails: Movie[];
  fetchFavoritesDetails: (movieIds: number[]) => Promise<void>;
  isLoading: boolean;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  moviesDetails: [],

  fetchFavoritesDetails: async (movieIds: number[]) => {
    const moviesDetails = await fetchMultipleMoviesDetailsFromAPI(movieIds);
    set({ moviesDetails });
  },
  isLoading: false
}));


