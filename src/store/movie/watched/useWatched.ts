import { create } from "zustand";
import { getAllMoviesWatched } from "@/api/movie/watched/getAllMoviesWatched";

type Movie = {
    id: number;
    movie_id_from_api: number;
    title: string;
    release_date: string;
    poster: string;
}

type AllMoviesWatched = {
    total: number;
    movies: Movie[];
}

interface WatchedState {
    isLoading: boolean;
    totalMoviesWatchedByUser?: number;
    moviesWatchedByUser?: Movie[];
    fetchAllMoviesWatchedByUser: (userId: number) => Promise<AllMoviesWatched | null>;
}

export const useGetAllMoviesWatched = create<WatchedState>((set) => ({
    isLoading: false,
    totalMoviesWatchedByUser: 0,
    fetchAllMoviesWatchedByUser: async (userId: number) => {
        set({ isLoading: true });
        try {
            const data = await getAllMoviesWatched(userId);
            set({ isLoading: false });
            set({ totalMoviesWatchedByUser: data.total });
            set({ moviesWatchedByUser: data.movies });
            
            return data;
        } catch (error) {
            console.error("Failed to fetch watched movies:", error);
            set({ isLoading: false });
            return null;
        }
    },
}));