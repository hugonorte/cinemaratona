import { create } from "zustand";
import { fetchCastFromAPI } from "../api/cast"; 
import { CastState } from "../types";

export const useCastStore = create<CastState>((set) => ({
  cast: null,
  fetchCast: async (movie_id: number) => {
    const cast = await fetchCastFromAPI(movie_id);
    set({ cast });
  },
}));