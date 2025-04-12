import ButtonPrimary from '@/components/button/primary';
import style from './style.module.scss';

export default function RankingMovieModal() {
  return (
    <div className={style.rankingMovieModal}>
      <div className={style.numbers_row}>
        {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className={style.rankingNumber}>
                {i}
            </div>
        ))}
      </div>

      <div className={style.review}>
        
        <textarea placeholder='Escreva um comentário sobre o filme (opcional)'>
          
        </textarea>
      </div>
      <ButtonPrimary label='Enviar' type='button' />
    </div>
  )
}
