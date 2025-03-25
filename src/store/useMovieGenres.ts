import { create } from "zustand";
import { fetchGenresFromAPI } from "../api/genres"; 
import { GenreState } from "../types";

export const useGenresStore = create<GenreState>((set, get) => ({
  genres: [], // Estado inicial - Referese ao GenreState
  
  fetchGenres: async () => {
    const genres = get().genres;
    if (genres && genres.length > 0) return; // Evita chamadas desnecessárias
    const newGenres = await fetchGenresFromAPI();
    set({ genres: newGenres });
  },
}));
