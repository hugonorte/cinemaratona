import BaseLayout from '../../components/layout'
import Title from '../../components/title'
import style from './style.module.scss'
import { usePopularMovieStore } from '../../store/usePopularMovieStore'
import { useTopRatedMovieStore } from '../../store/useTopRatedMovieStore'
import SearchResultsContainer from '../../components/search/search_results';
import { useEffect } from 'react';
import CardMovieSearch from '../../components/card/movie/search';
import ButtonPrimary from '../../components/button/primary'

export default function Home() {

  const { popularMovies, fetchPopularMovies } = usePopularMovieStore();
  const { topRatedmovies, fetchTopRatedMovies } = useTopRatedMovieStore();
  useEffect(() => {
    fetchPopularMovies();
    fetchTopRatedMovies();
    }, [fetchPopularMovies, fetchTopRatedMovies]);

  return (
    <>
    <BaseLayout>
        <div className={style.container}>
            <section className={style.header}>
                <div className={style.title}>
                  Encontre o seu próximo filme favorito em poucos cliques!
                  <ButtonPrimary label='Cadastre-se' type='button' />
                </div>
            </section>
            <section className={style.trends}>
                <div className={style.title}>
                  <Title tag="h2" customColor='#FFFFFF'>
                    Filmes que estão em alta
                  </Title>
                  <SearchResultsContainer>
                  {
                    popularMovies.map((popMovie) => (
                    <CardMovieSearch img_source={popMovie.poster_path} title={popMovie.title} key={popMovie.id} release_date={popMovie.release_date} id={popMovie.id}/>
                    ))
                  }                  
                  </SearchResultsContainer>
                </div>
            </section>
            <section className={style.social}>

            </section>
            <section className={style.top_rated}>
                <div className={style.title}>
                  <Title tag="h2" customColor='#FFFFFF'>
                    Filmes Preferidos dos Usuários
                  </Title>
                  <SearchResultsContainer>
                  {
                    topRatedmovies.map((topRatedMovie) => (
                    <CardMovieSearch img_source={topRatedMovie.poster_path} title={topRatedMovie.title} key={topRatedMovie.id} release_date={topRatedMovie.release_date} id={topRatedMovie.id}/>
                    ))
                  }                  
                  </SearchResultsContainer>
                </div>
            </section>
        </div>
    </BaseLayout>
    </>
  )
}
