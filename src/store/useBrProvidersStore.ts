import { create } from "zustand";
import { fetchBrProvidersFromAPI } from "../api/brProviders"; 
import { BrProvider } from "../types";

interface BrProviderState {
  brProvider: BrProvider | null;
  fetchBrProvider: (movie_id: number) => Promise<void>;
}

export const useBrProviderStore = create<BrProviderState>((set) => ({
  brProvider: null,
  fetchBrProvider: async (movie_id: number) => {
    const brProvider = await fetchBrProvidersFromAPI(movie_id);
    set({ brProvider });
  },
}));