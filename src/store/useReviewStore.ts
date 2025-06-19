import { create } from 'zustand';
import { createReviewAPI } from '@/api/createReviewApi';

interface ReviewInput {
  review: string;
  rating: number;
  user_id: number;
  movie_id_from_api: number;
  title:string
  release_date: string 
  poster: string;
}

interface Review {
  review?: string;
  rating?: number;
}

interface ReviewState {
  review: Review;
  createReview: (token: string, input: ReviewInput) => Promise<void>;
}

export const useReviewStore = create<ReviewState>(() => ({
  review: {},
  createReview: async (token, input) => {
    const newReview = await createReviewAPI(token, {review: input.review, rating: input.rating, user_id: input.user_id, movie_id_from_api: input.movie_id_from_api, title: input.title, release_date: input.release_date, poster: input.poster});
    console.log(newReview);
  },
}));
