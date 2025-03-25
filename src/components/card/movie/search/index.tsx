import style from './style.module.scss'
import Title from '../../../title'
import imageNotFound from '@assets/img/movie_not_found.svg'
import { Link } from 'react-router'

interface CardMovieSearchProps {
    img_source: string;
    title: string;
    release_date: string; 
    id: number;
}

function CardMovieSearch({ img_source, title, release_date, id }: CardMovieSearchProps) {
  const image = img_source ? `https://image.tmdb.org/t/p/w500${img_source}` : imageNotFound;
  return (
    <div className={style.container}>
      <Link to={`/movie/${id}`}>
        <img src={image} alt="Imagem do filme" />
      </Link>
      <Link to={`/movie/${id}`}>
        <Title tag="h4">
          {title}
        </Title>
      </Link>
        <p>{release_date.slice(0,4)}</p>
    </div>
  )
}

export default CardMovieSearch