import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import style from './style.module.scss'

import { usePendingMoviesToWatchStore } from '@/store/usePendingMovies'
import { useCurrentUserStore } from '@/store/users/useCurrentUser'
import { useGetAllMoviesWatched } from '@/store/movie/watched/useWatched'
import { useGetAllMoviesToBeWatched } from '@/store/movie/toWatch/useGetAllMoviesToBeWatched'
import { useGetTotalReviewsFromAUser } from '@/store/review/useGetTotalReviewsFromAUser'
import { useFavoritesStore } from '@/store/useFavoritesStore'
import { useAuthStore } from '@/store/useAuthStore'

import Main from '@/components/containers/main'
import BaseLayout from '@/components/layout'
import Title from '@/components/title'
import SearchResultsContainer from '@/components/search/search_results'
import CardMovieSearch from '@/components/card/movie/search'
import Loading from '@/components/loading'

import { BiCameraMovie } from "react-icons/bi";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function Social() {

  const { refreshToken } = useAuthStore();
  refreshToken();

  const { currentUser, getCurrentUser } = useCurrentUserStore();
  const {
    moviesWatchedByUser,
    totalMoviesWatchedByUser,
    fetchAllMoviesWatchedByUser,
  } = useGetAllMoviesWatched();
  const { fetchAllMoviesToBeWatchedByUser, moviesToBeWatchedByUser, totalMoviesToBeWatchedByUser } = useGetAllMoviesToBeWatched();
  const {totalReviewsFromUser, fetchTotalReviewsFromUser} = useGetTotalReviewsFromAUser();
 /*  const [ moviesWatched, setMoviesWatched ] = getAllMoviesWatched([]);
  const [ totalMoviesWatched, setTotalMoviesWatched ] = getAllMoviesWatched(0); */
//console.log(totalReviewsFromUser)
  useEffect(() => {
    if (!currentUser) getCurrentUser();
    if (currentUser?.id){
      fetchAllMoviesWatchedByUser(Number(currentUser?.id));
      fetchAllMoviesToBeWatchedByUser(Number(currentUser?.id));
      fetchTotalReviewsFromUser(Number(currentUser?.id));
    }
  }, [currentUser, getCurrentUser, fetchAllMoviesWatchedByUser, fetchTotalReviewsFromUser, fetchAllMoviesToBeWatchedByUser]);

  const user = {
    name: currentUser?.name,
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
  const { fetchPendingMoviesToWatchDetails } = usePendingMoviesToWatchStore();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      fetchFavoritesDetails(user.favorite_movies);
      fetchPendingMoviesToWatchDetails(user.pending_movies);
      hasFetched.current = true;
    }
  }, [fetchFavoritesDetails, user.favorite_movies, fetchPendingMoviesToWatchDetails, user.pending_movies]);


  if (!moviesDetails || !currentUser) {
    console.log("currentUser", currentUser);
    console.log("moviesDetails", moviesDetails);
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
                      <span>{totalReviewsFromUser?.total}</span>
                      <BiCameraMovie />
                      <Title tag='h3'>
                        Filmes Avaliados: 
                      </Title>
                      {/* <p>Ver todos</p> */}
                    </div>
                    <div>
                      <span>{totalMoviesWatchedByUser}</span>
                      <BiCameraMovie />
                      <Title tag='h3'>
                        Filmes Assistidos: 
                      </Title>
                      {/* <p>Ver todos</p> */}
                    </div>
                    <div>
                      <span>{totalMoviesToBeWatchedByUser}</span>
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
              <Title tag='h2'>Filmes Recomendados pelos seus amigos</Title>
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
                moviesToBeWatchedByUser?.map((pendingMovie) => (
                  <CardMovieSearch
                    img_source={pendingMovie.poster}
                    title={pendingMovie.title}
                    key={pendingMovie.id}
                    release_date={pendingMovie.release_date}
                    id={pendingMovie.movie_id_from_api} />
                ))
              }
            </SearchResultsContainer>
          </div>
          <div className={style.favorites}>
            <SearchResultsContainer>
              <Title tag='h2'>Filmes Já Assistidos</Title>
              {
                moviesWatchedByUser?.map((watchedMovie) => (
                  <CardMovieSearch
                    img_source={watchedMovie.poster}
                    title={watchedMovie.title}
                    key={watchedMovie.id}
                    release_date={watchedMovie.release_date}
                    id={watchedMovie.movie_id_from_api} />
                ))
              }
            </SearchResultsContainer>
          </div>
          
        </Main>
      </BaseLayout>
    </>
  )
}
