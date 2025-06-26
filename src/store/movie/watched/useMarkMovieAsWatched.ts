import { create } from "zustand";
import { markMovieAsWatchedAPI } from "@/api/movie/watched/markMovieAsWatchedApi"; 

interface watchedState {
    isWatched: boolean | null;
    markMovieAsWatched: (user_id: number, movie_id: number, title: string, release_date: string, poster:string, accessToken: string) => Promise<boolean | null>;
}

export const useMarkMovieAsWatched = create<watchedState>((set) => ({
    isWatched: null,
    markMovieAsWatched: async (user_id: number, movie_id: number, title: string, release_date: string, poster:string, accessToken: string) => {
        const isWatched = await markMovieAsWatchedAPI(user_id, movie_id, title, release_date, poster, accessToken);
        set({ isWatched });
        return isWatched;
  },
}));