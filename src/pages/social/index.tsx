import { useEffect, useRef } from 'react'
import Main from '../../components/containers/main'
import BaseLayout from '../../components/layout'
import Title from '../../components/title'
import style from './style.module.scss'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import SearchResultsContainer from '../../components/search/search_results'
import CardMovieSearch from '../../components/card/movie/search'

export default function Social() {

  const user = {
    name: 'Silvio Santos',
    email: 'silvio@sbt.com.br',
    reviews: 4,
    favorite_movies: [1125899, 1165067, 822119, 777443, 1356039],
    recommended_movies: [],
    watched_movies: 252,
    movies_to_watch: 43,
    followers: 123,
    following: 123,
    member_since: '2021-01-01',
    profile_picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUUZ9UwhvJRuQaYvBYYEkurKsHuum9dH8g-VOVS6wuzx_CRnMJLpBPijMx9scxRDycudaVYjA2qrF8XL8kz7i0ow'
  }

  const { moviesDetails, fetchFavoritesDetails } = useFavoritesStore();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      fetchFavoritesDetails(user.favorite_movies);
      hasFetched.current = true;
    }
  }, [fetchFavoritesDetails, user.favorite_movies]);

  if (!moviesDetails.length) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <BaseLayout>
        <Main>
          <div className={style.profile_header}>
            <div className={style.profile_img}>
              <img src={user.profile_picture} alt={user.name} />
              <div className={style.profile_summary}>
                <h1>{user.name}</h1>
                <div className={style.member_since}>
                  <p>
                    Membro desde
                  </p>
                  <p>
                    {user.member_since.split('-').reverse().join('/')}
                  </p>
                </div>
                <div className={style.follow_container}>
                  <div>
                    <span className={style.number}>{user.followers}</span>
                    <Title tag='h5'>Seguidores</Title>
                  </div>
                  <div>
                    <span className={style.number}>{user.following}</span>
                    <Title tag='h5'>Seguindo</Title>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.profile_data}>
              <Title tag='h3'>
                HIstórico resumido
              </Title>
              <div className={style.movies_summary}>
                <div>
                  <Title tag='h4'>
                    Filmes Avaliados: <span>{user.reviews}</span>
                  </Title>
                </div>
                <div>
                  <Title tag='h4'>
                    Filmes Assistidos: <span>{user.watched_movies}</span>
                  </Title>
                </div>
                <div>
                  <Title tag='h4'>
                    Filmes para assistir: <span>{user.movies_to_watch}</span>
                  </Title>
                </div>
              </div>
            </div>
          </div>
            <div className={style.favorites}>
              <SearchResultsContainer>
              <Title tag='h2'>Filmes Favoritos</Title>
                {
                  moviesDetails.map((favoriteMovie) => (
                  <CardMovieSearch 
                    img_source={favoriteMovie.poster_path} 
                    title={favoriteMovie.title} 
                    key={favoriteMovie.id} 
                    release_date={favoriteMovie.release_date} 
                    id={favoriteMovie.id}/>
                  ))
                }                  
              </SearchResultsContainer>
            </div>
        </Main>
      </BaseLayout>
    </>
  )
}
