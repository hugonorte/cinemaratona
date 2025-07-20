import { create } from "zustand";
import { checkUserAddedMovieToListApi } from "@/api/movie/toWatch/checkUserAddedMovieToList"; 

interface movieAddedToListState {
    isAddedInMoviesToWachtList: boolean | null;
    fetchIsAddedInMoviesToWachtList: (user_id: number, movie_id: number) => Promise<boolean | null>;
}

export const useCheckUserAddedInMoviesToWachtList = create<movieAddedToListState>((set) => ({
    isAddedInMoviesToWachtList: false,
    fetchIsAddedInMoviesToWachtList: async (user_id: number, movie_id: number) => {
        const isAddedInMoviesToWachtList = await checkUserAddedMovieToListApi(user_id, movie_id);
        set({ isAddedInMoviesToWachtList });
        console.log("store", isAddedInMoviesToWachtList)
        return isAddedInMoviesToWachtList;
  },
}));