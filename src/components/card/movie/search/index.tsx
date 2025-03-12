import style from './style.module.scss'
import Title from '../../../title'

interface CardMovieSearchProps {
    img_source: string;
    title: string;
    release_date: string; 
}

function CardMovieSearch({ img_source, title, release_date }: CardMovieSearchProps) {
  return (
    <div className={style.container}>
        <img src={`https://image.tmdb.org/t/p/w500${img_source}`} alt="Imagem do filme" />
        <Title tag="h4" customColor="#0c2b3c">
          {title}
        </Title>
        <p>{release_date}</p>
    </div>
  )
}

export default CardMovieSearch