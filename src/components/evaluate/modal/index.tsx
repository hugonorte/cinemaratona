import { useEffect, useState } from 'react';
import ButtonPrimary from '@/components/button/primary';
import style from './style.module.scss';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCurrentUserStore } from '@/store/users/useCurrentUser'
import { useSelectedMovieStore } from '@/store/useSelectedMovie';
import { useAuthStore } from '@/store/useAuthStore';
import { useReviewStore } from '@/store/useReviewStore'
import { useNavigate } from 'react-router';


type RatingMovieModalProps = {
  onSuccess: () => void;
};

export default function RatingMovieModal({ onSuccess }: RatingMovieModalProps) {
  const [rating, setRating] = useState<number | null>(null);
  const { currentUser } = useCurrentUserStore();
  const selectedMovie = useSelectedMovieStore((state) => state.getSelectedMovie());
  const userId = useAuthStore().user?.id
  const token = useAuthStore().accessToken;
  const createReview = useReviewStore((state) => state.createReview);
  const navigate = useNavigate();
  const createReviewSchema = z.object({
    rating: z.number({
      required_error: 'É obrigatório escolher uma nota de 0 a 10',
      invalid_type_error: 'Nota inválida',
    }).min(0, 'Nota mínima é 0').max(10, 'Nota máxima é 10'),
    review: z.string(),
    poster: z.string(),
    movie_id_from_api: z.string(),
    title: z.string(),
    release_date: z.string(),
  });

  type CreateReviewSchema = z.infer<typeof createReviewSchema>;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateReviewSchema>({
  resolver: zodResolver(createReviewSchema),
  defaultValues: {
    rating: undefined,
  }
});

  const handleRating = (userChoice: number) => {
  setRating(userChoice);
  setValue('rating', userChoice);
};

  const handleCreateReview = (data: CreateReviewSchema) => {
    createReview(token ?? '', {
      review: data.review,
      rating: data.rating,
      user_id: userId ? Number(userId) : 0,
      movie_id_from_api: selectedMovie?.id ?? 0,
      title: selectedMovie?.title ?? '',
      release_date: selectedMovie?.releaseDate ?? '',
      poster: selectedMovie?.posterPath ?? ''
    });
    onSuccess();
  }

  useEffect(() => {
    if (selectedMovie) {
      setRating(null);
    }
    if (!currentUser) {
      navigate('/login');
      return;
    }
  }, [selectedMovie, currentUser, navigate]);

  return (
    <>
      <div className={style.rankingMovieModal}>
        <div className={style.numbers_row}>
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className={style.rankingNumber} onClick={() => { handleRating(i) }} style={{
              backgroundColor: rating === i ? '#006bff' : '#fff',
              color: rating === i ? '#ffffff' : '#034c8c'
            }}>
              {i}
            </div>
          ))}
        </div>
        <div className={style.review}>
          <form onSubmit={handleSubmit(handleCreateReview, (formErrors) => {
            console.error('Erro no formulário:', formErrors);
          })}>
            <textarea
              id="review"
              placeholder='Escreva um comentário sobre o filme (opcional)'
              rows={2}
              cols={50}
              style={{ width: '100%' }}
              {...register("review")} >
            </textarea>
            {errors.rating && <p>{errors.rating.message}</p>}
            <input type="hidden" value={selectedMovie?.posterPath ?? ''} {...register("poster")} />
            <input type="hidden" value={selectedMovie?.id ?? ''}  {...register("movie_id_from_api")} />
            <input type="hidden" value={selectedMovie?.title ?? ''} {...register("title")} />
            <input type="hidden" value={selectedMovie?.releaseDate ?? ''} {...register("release_date")} />
            <ButtonPrimary label='Enviar' type='submit' />
          </form>
        </div>
      </div>
    </>
  )
}
