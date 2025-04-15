
import { useEffect, useState } from 'react';
import { useGenresStore } from '../../store/useMovieGenres'
import { useStreamingProvidersStore } from '../../store/useStreamingProviders'
import { useMovieByGenreAndStreamingStore } from '../../store/useMovieByGenreAndStreamingStore'
import BaseLayout from '../../components/layout';
import style from './style.module.scss'
import lightButtonStyle from '../../components/button/light/style.module.scss'
import Title from '../../components/title';
import Main from '../../components/containers/main';
import ButtonLight from '../../components/button/light';
import { StreamingProviders}  from '../../constants/streaming_providers';
import CardMovieSearch from '../../components/card/movie/search';
import SearchResultsContainer from '../../components/search/search_results';
import netflix from "../../assets/img/streamings/netflix.svg";
import disney_plus from "../../assets/img/streamings/disney.svg";
import amazon from "../../assets/img/streamings/amazon.svg";
import globoplay from "../../assets/img/streamings/globoplay.svg";
import max from "../../assets/img/streamings/max.svg";
import paramount from "../../assets/img/streamings/paramount.svg";
import apple from "../../assets/img/streamings/apple.svg";
import Loading from "../../components/loading";

export default function Discover() {

  const { genres, fetchGenres } = useGenresStore();
  const { streamingProviders, fetchStreamingProviders, isLoading } = useStreamingProvidersStore();
  const { movies, fetchMovies } = useMovieByGenreAndStreamingStore();
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [selectedProviderId, setSelectedProviderId] = useState<number | null>(null);

  useEffect(() => {
    fetchGenres();
    fetchStreamingProviders();

  }, [fetchGenres, fetchStreamingProviders]);

  useEffect(() => {
    if (selectedGenreId !== null && selectedProviderId !== null) {
      fetchMovies("" ,selectedGenreId, selectedProviderId);
    }
  }, [selectedGenreId, selectedProviderId, fetchMovies]);

  const filteredStreamingProviders = streamingProviders?.filter(provider => 
    Object.values(StreamingProviders).includes(provider.provider_id)
  );

  if (!movies) {
    return <Loading />;
  }

  return (
    <BaseLayout>
      <Main>
        <Title tag="h1">
          Sugestões dos usuários
        </Title>
        <div className={style.container}>
          <div className={style.genres}>
            <Title tag="h4">
              Escolha um dos gêneros de filmes
            </Title>
            <div className={style.genres_container}>
              {genres?.map(genre => (
                  <ButtonLight type="button" key={genre.id} onClick={() => {setSelectedGenreId(genre.id); console.log(selectedGenreId, genre.id)}}  className={`${style.button} ${selectedGenreId === genre.id ? lightButtonStyle.selected : ''}`}>
                    {genre.name}
                  </ButtonLight>
              ))}
            </div>
          </div>
          <div className={style.genres}>
            <Title tag="h4">
              Escolha um dos Streamings de filmes
            </Title>
            <div className={style.streamings_container}>
              {filteredStreamingProviders?.map(provider => (
                <ButtonLight type="button" key={provider.provider_id} onClick={() => setSelectedProviderId(provider.provider_id)} className={`${style.button} ${selectedProviderId === provider.provider_id ? lightButtonStyle.selected : ''}`}>
                  {(() => {
                    switch (provider.provider_id) {
                      case 8:
                        return <img src={netflix} alt="Netflix" />;
                      case 119:
                        return <img src={amazon} alt="Amazon" />;
                      case 1899:
                        return <img src={max} alt="Max" />;
                      case 531:
                        return <img src={paramount} alt="Paramount" />;
                      case 337:
                        return <img src={disney_plus} alt="Disney+" />;
                      case 2:
                        return <img src={apple} alt="Apple" />;
                      case 307:
                        return <img src={globoplay} alt="Globoplay" />;
                      default:
                        return <Title tag="p">{provider.provider_name}</Title>;
                    }
                  })()}
                </ButtonLight>
              ))}
            </div>
          </div>
        {
          isLoading ? (
            <Loading />
          ) :
          (
            <SearchResultsContainer>
              <Title tag="h4">
                Resultados da busca por do gênero {genres?.find(genre => genre.id === selectedGenreId)?.name} e streaming  {streamingProviders?.find(provider => provider.provider_id === selectedProviderId)?.provider_name}
              </Title>
              {movies.map((movie) => (
                <CardMovieSearch img_source={movie.poster_path} title={movie.title} key={movie.id} release_date={movie.release_date} id={movie.id}/>
              ))}
            </SearchResultsContainer>
          )
        }
        </div>
      </Main>
    </BaseLayout>
  )
}