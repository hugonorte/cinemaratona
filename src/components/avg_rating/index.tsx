import style from './style.module.scss'

interface AverageRatingProps {
  rating: number
}

export default function AverageRating({ rating }: AverageRatingProps) {
  return (
    <div className={style.rating + " " + (rating < 5 ? style.bad : rating >= 8 ? style.good : style.ok)}>
        {rating}
    </div>
  )
}
