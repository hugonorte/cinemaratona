import { useEffect, useRef } from 'react'
import Main from '../../components/containers/main'
import BaseLayout from '../../components/layout'
import Title from '../../components/title'
import style from './style.module.scss'
import { useFavoritesStore } from '../../store/useFavoritesStore'
import { usePendingMoviesToWatchStore } from '../../store/usePendingMovies'
import SearchResultsContainer from '../../components/search/search_results'
import CardMovieSearch from '../../components/card/movie/search'
import { BiCameraMovie } from "react-icons/bi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from 'react-router'
import Loading from '../../components/loading'

//import {useCreateUserStore} from '@/store/users/useCurrentUser'

export default function Social() {

  //const testuser = useCreateUserStore((state) => state.user);
  //console.log(testuser)

  const user = {
    name: 'Silvio Santos',
    email: 'silvio@sbt.com.br',
    reviews: 4,
    favorite_movies: [1125899, 1165067, 822119, 777443, 1356039],
    recommended_movies: [13, 550, 245891, 79, 77],
    watched_movies: 252,
    movies_to_watch: 4,
    pending_movies: [13223, 124905, 823219, 3049],
    followers: 123,
    following: 123,
    member_since: '2021-01-01',
    profile_picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUUZ9UwhvJRuQaYvBYYEkurKsHuum9dH8g-VOVS6wuzx_CRnMJLpBPijMx9scxRDycudaVYjA2qrF8XL8kz7i0ow'
  }

  const { moviesDetails, fetchFavoritesDetails, isLoading } = useFavoritesStore();
  const { pendingMoviesToWatchDetails, fetchPendingMoviesToWatchDetails } = usePendingMoviesToWatchStore();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      fetchFavoritesDetails(user.favorite_movies);
      fetchPendingMoviesToWatchDetails(user.pending_movies);
      hasFetched.current = true;
    }
  }, [fetchFavoritesDetails, user.favorite_movies, fetchPendingMoviesToWatchDetails, user.pending_movies]);


  if (!moviesDetails) {
      return <Loading />;
  }
  return (
    <>
      <BaseLayout>
        <Main>
          {
            isLoading ? (
                <Loading />
            ) : (
              <div className={style.profile_header}>
                <div className={style.profile_img}>
                  <div className={style.profile_picture_container}>
                    <img src={user.profile_picture} alt={user.name} />
                  </div>
                  <div className={style.profile_summary}>
                    <h1>{user.name}</h1>
                    <p>
                      <Link to="/profile/edit">
                        Editar <HiOutlinePencilSquare />
                      </Link>
                    </p>
                    {/* 
                    <div className={style.member_since}>
                      <p>
                        Membro desde
                      </p>
                      <p>
                        {user.member_since.split('-').reverse().join('/')}
                      </p>
                    </div> 
                    */}
                    <div className={style.follow_container}>
                      <div>
                        <Link to="/friends">
                          <span className={style.number}>{user.followers}</span>
                          <Title tag='h5'>Seguidores</Title>
                        </Link>
                      </div>
                      <div>
                        <Link to="/friends">
                          <span className={style.number}>{user.following}</span>
                          <Title tag='h5'>Seguindo</Title>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.profile_data}>
                {/*  <Title tag='h3'>
                    HIstórico resumido
                  </Title> */}
                  <div className={style.movies_summary}>
                    <div>
                      <span>{user.reviews}</span>
                      <BiCameraMovie />
                      <Title tag='h3'>
                        Filmes Avaliados: 
                      </Title>
                      {/* <p>Ver todos</p> */}
                    </div>
                    <div>
                      <span>{user.watched_movies}</span>
                      <BiCameraMovie />
                      <Title tag='h3'>
                        Filmes Assistidos: 
                      </Title>
                      {/* <p>Ver todos</p> */}
                    </div>
                    <div>
                      <span>{user.movies_to_watch}</span>
                      <BiCameraMovie />
                      <Title tag='h3'>
                        Filmes para assistir: 
                      </Title>
                      {/* <p>Ver todos</p> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          <div className={style.favorites}>
            <SearchResultsContainer>
              <Title tag='h2'>Filmes Favoritos</Title>
              <div className={style.movie_row}>
                {
                  moviesDetails.map((favoriteMovie) => (
                    <CardMovieSearch
                      img_source={favoriteMovie.poster_path}
                      title={favoriteMovie.title}
                      key={favoriteMovie.id}
                      release_date={favoriteMovie.release_date}
                      id={favoriteMovie.id} />
                  ))
                }
              </div>
            </SearchResultsContainer>
          </div>
          <div className={style.favorites}>
            <SearchResultsContainer>
              <Title tag='h2'>Filmes Recomendados</Title>
              {
                moviesDetails.map((favoriteMovie) => (
                  <CardMovieSearch
                    img_source={favoriteMovie.poster_path}
                    title={favoriteMovie.title}
                    key={favoriteMovie.id}
                    release_date={favoriteMovie.release_date}
                    id={favoriteMovie.id} />
                ))
              }
            </SearchResultsContainer>
          </div>
          <div className={style.favorites}>
            <SearchResultsContainer>
              <Title tag='h2'>Filmes Para Assistir</Title>
              {
                pendingMoviesToWatchDetails.map((pendingMovie) => (
                  <CardMovieSearch
                    img_source={pendingMovie.poster_path}
                    title={pendingMovie.title}
                    key={pendingMovie.id}
                    release_date={pendingMovie.release_date}
                    id={pendingMovie.id} />
                ))
              }
            </SearchResultsContainer>
          </div>
          
        </Main>
      </BaseLayout>
    </>
  )
}
