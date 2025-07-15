import { create } from "zustand";
import { getTotalReviewsFromAUser } from "@/api/review/getTotalReviewsFromAUser"

type TotalReviews = {
    total: number;
    user_id: number | null;
}
type ReviewState = {
    isLoading: boolean;
    totalReviewsFromUser?: TotalReviews | null;
    fetchTotalReviewsFromUser: (user_id: number) => Promise<TotalReviews>;
}
export const useGetTotalReviewsFromAUser = create<ReviewState>((set) => ({
    isLoading: false,
    totalReviewsFromUser: { total: 0, user_id: null },
    fetchTotalReviewsFromUser: async (user_id: number) => {
        set({ isLoading: true });
        try {
            const data: TotalReviews = await getTotalReviewsFromAUser(user_id);
            set({ isLoading: false, totalReviewsFromUser: data });
            return data;
        } catch (error) {
            console.error("Failed to fetch total reviews:", error);
            set({ isLoading: false, totalReviewsFromUser: null });
            return { total: 0, user_id: null };
        }
    },
}));