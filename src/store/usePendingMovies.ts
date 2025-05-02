import { create } from "zustand";
import { fetchMultipleMoviesDetailsFromAPI } from "../api/favorites";
import { Movie } from "../types";

interface PendingMoviesToWatchState {
  pendingMoviesToWatchDetails: Movie[];
  fetchPendingMoviesToWatchDetails: (movieIds: number[]) => Promise<void>;
  isLoadingPendingMoviesToWatch: boolean;
}

export const usePendingMoviesToWatchStore = create<PendingMoviesToWatchState>((set) => ({
  pendingMoviesToWatchDetails: [],

  fetchPendingMoviesToWatchDetails: async (movieIds: number[]) => {
    const pendingMoviesToWatchDetails = await fetchMultipleMoviesDetailsFromAPI(movieIds);
    set({ pendingMoviesToWatchDetails });
  },
  isLoadingPendingMoviesToWatch: false
}));


