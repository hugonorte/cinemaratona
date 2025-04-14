import BaseLayout from '../../components/layout'
import Title from '../../components/title'
import style from './style.module.scss'
import { usePopularMovieStore } from '../../store/usePopularMovieStore'
import { useTopRatedMovieStore } from '../../store/useTopRatedMovieStore'
import SearchResultsContainer from '../../components/search/search_results';
import { useEffect } from 'react';
import CardMovieSearch from '../../components/card/movie/search';
import ButtonPrimary from '../../components/button/primary'
import { VscChecklist } from "react-icons/vsc";
import { FaPeopleLine } from "react-icons/fa6";
import { MdMovieFilter } from "react-icons/md";


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
            </section>
          <section className={style.social}>
            {/* Registre os filmes que já viu
            Adicione seus amigos
            Troque recomendações com amigos e descubra novos títulos para assistir 
            import { VscChecklist } from "react-icons/vsc";
import { FaPeopleLine } from "react-icons/fa6";
import { MdMovieFilter } from "react-icons/md";
            
            */}
            <div className={style.checklist}>
              <VscChecklist size={150} color="#FFFFFF" />
              <Title tag="h3" customColor='#FFFFFF'>
                Registre os filmes que já viu
              </Title>
            </div>
            <div className={style.connect}>
              <FaPeopleLine size={150} color="#FFFFFF" />
              <Title tag="h3" customColor='#FFFFFF'>
                Adicione seus amigos
              </Title>
            </div>
            <div className={style.discover}>
              <MdMovieFilter size={150} color="#FFFFFF" />
              <Title tag="h3" customColor='#FFFFFF'>
                Descubra novos títulos
              </Title>
            </div>

          </section>
            <section className={style.top_rated}>
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
            </section>
        </div>
    </BaseLayout>
    </>
  )
}
