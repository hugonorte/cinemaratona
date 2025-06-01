import { useState } from 'react';
import ButtonPrimary from '@/components/button/primary';
import style from './style.module.scss';
import { number, set, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCurrentUserStore } from '@/store/users/useCurrentUser'

export default function RankingMovieModal() {
  const [ranking, setRanking] = useState<number>(11);
  const [review, setReview] = useState<string>('');
  const { currentUser } = useCurrentUserStore();
  console.log("foo", currentUser);
  const schema = z.object({
    ranking: z.number().min(0).max(10).int(),
    review: z.string().optional(),
  });
  const handleRanking = (userChoice: number) => {
    setRanking(userChoice);
  }
  const handleCreateReview = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ranking = formData.get('ranking');
    const review = formData.get('review');
    console.log(ranking, review)
    if (typeof ranking !== 'number' || typeof review !== 'string') {
      console.error('Invalid form data');
      return;
    }
  }
  return (
    <>
      <div className={style.rankingMovieModal}>
        <div className={style.numbers_row}>
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className={style.rankingNumber} onClick={() => { handleRanking(i) }} style={{
              backgroundColor: ranking === i ? '#006bff' : '#fff',
              color: ranking === i ? '#ffffff' : '#034c8c'
            }}>
              {i}
            </div>
          ))}
        </div>
        <form onSubmit={handleCreateReview}>
          <div className={style.review}>
            <textarea placeholder='Escreva um comentário sobre o filme (opcional)' onChange={(e)=>setReview(e.target.value)} value={review} name='review' rows={2} cols={50} style={{ width: '100%' }}>
            </textarea>
            <input type="hidden" name="ranking" value={ranking} />
          </div>
          <ButtonPrimary label='Enviar' type='submit' />
        </form>
      </div>
    </>
  )
}
