import { create } from "zustand";
import { checkUserWatchedMovieAPI } from "@/api/movie/watched/checkUserWatchedMovieApi"; 

interface watchedState {
    isWatched: boolean | null;
    fetchIsWatched: (user_id: number, movie_id: number) => Promise<boolean | null>;
}

export const useCheckUserWatchedMovie = create<watchedState>((set) => ({
    isWatched: false,
    fetchIsWatched: async (user_id: number, movie_id: number) => {
        const isWatched = await checkUserWatchedMovieAPI(user_id, movie_id);
        set({ isWatched });
        return isWatched;
  },
}));