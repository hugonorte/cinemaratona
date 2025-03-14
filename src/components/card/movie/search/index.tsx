import style from './style.module.scss'
import Title from '../../../title'
import imageNotFound from '@assets/img/movie_not_found.svg'

interface CardMovieSearchProps {
    img_source: string;
    title: string;
    release_date: string; 
}

function CardMovieSearch({ img_source, title, release_date }: CardMovieSearchProps) {
  const image = img_source ? `https://image.tmdb.org/t/p/w500${img_source}` : imageNotFound;
  return (
    <div className={style.container}>
        <img src={image} alt="Imagem do filme" />
        <Title tag="h4" customColor="#0c2b3c">
          {title}
        </Title>
        <p>{release_date}</p>
    </div>
  )
}

export default CardMovieSearch