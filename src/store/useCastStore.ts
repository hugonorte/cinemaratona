import { create } from "zustand";
import { fetchCastFromAPI } from "../api/cast"; 
import { CastState } from "../types";

export const useCastStore = create<CastState>((set) => ({
  staff: null,
  fetchCast: async (movie_id: number) => {
    const staff = await fetchCastFromAPI(movie_id);
    set({ staff });
  },
}));