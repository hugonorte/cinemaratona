import { create } from "zustand";
import { getAllMoviesToBeWatched } from "@/api/movie/toWatch/getAllMoviesToBeWatched";

type Movie = {
    id: number;
    movie_id_from_api: number;
    title: string;
    release_date: string;
    poster: string;
}

type AllMoviesToBeWatched = {
    total: number;
    movies: Movie[];
}

interface ToBeWatchedState {
    isLoading: boolean;
    totalMoviesToBeWatchedByUser?: number;
    moviesToBeWatchedByUser?: Movie[];
    fetchAllMoviesToBeWatchedByUser: (userId: number) => Promise<AllMoviesToBeWatched | null>;
}

export const useGetAllMoviesToBeWatched = create<ToBeWatchedState>((set) => ({
    isLoading: false,
    totalMoviesToBeWatchedByUser: 0,
    fetchAllMoviesToBeWatchedByUser: async (userId: number) => {
        set({ isLoading: true });
        try {
            const data = await getAllMoviesToBeWatched(userId);
            set({ isLoading: false });
            set({ totalMoviesToBeWatchedByUser: data.total });
            set({ moviesToBeWatchedByUser: data.movies });
            
            return data;
        } catch (error) {
            console.error("Failed to fetch movies to be watched :", error);
            set({ isLoading: false });
            return null;
        }
    },
}));