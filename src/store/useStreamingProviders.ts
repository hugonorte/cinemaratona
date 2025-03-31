import { create } from "zustand";
import { fetchStreamingProvidersFromAPI } from "../api/streaming_providers"; 
import { StreamingProviderState } from "../types";

export const useStreamingProvidersStore = create<StreamingProviderState>((set, get) => ({
  streamingProviders: [], // Estado inicial - Referese ao GenreState
  
  fetchStreamingProviders: async () => {
    const streamingProviders = get().streamingProviders;
    if (streamingProviders && streamingProviders.length > 0) return; // Evita chamadas desnecessárias
    const newStreamingProviders = await fetchStreamingProvidersFromAPI();
    set({ streamingProviders: newStreamingProviders });
  },
  isLoading: false
}));
