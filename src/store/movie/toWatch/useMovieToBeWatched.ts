import { create } from "zustand";
import { markMovieAsMovieToWatchAPI } from "@/api/movie/toWatch/markMovieAsMovieToWatchApi"; 

interface movieTowatchState {
    isMarkedToWatched: boolean | null;
    markMovieAsMovieToBeWatched: (user_id: number, movie_id: number, title: string, release_date: string, poster:string, accessToken: string) => Promise<boolean | null>;
}

export const useMarkMovieAsMovieToWatch = create<movieTowatchState>((set) => ({
    isMarkedToWatched: null,
    markMovieAsMovieToBeWatched: async (user_id: number, movie_id: number, title: string, release_date: string, poster:string, accessToken: string) => {
        const isMarkedToWatched = await markMovieAsMovieToWatchAPI(user_id, movie_id, title, release_date, poster, accessToken);
        set({ isMarkedToWatched });
        return isMarkedToWatched;
  },
}));