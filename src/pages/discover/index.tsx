
import { useEffect } from 'react';
import { useGenresStore } from '../../store/useMovieGenres'
import { useStreamingProvidersStore } from '../../store/useStreamingProviders'
import BaseLayout from '../../components/layout';
import style from './style.module.scss'
import Title from '../../components/title';
import Main from '../../components/containers/main';
import ButtonLight from '../../components/button/light';

export default function Discover() {

  const { genres, fetchGenres } = useGenresStore();
  const { streamingProviders, fetchStreamingProviders } = useStreamingProvidersStore();

  useEffect(() => {
    fetchGenres();
    fetchStreamingProviders();

  }, [fetchGenres, fetchStreamingProviders]);
  console.log(genres);
  console.log(streamingProviders);

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
            <div className="genres_container">
              {genres?.map(genre => (
                  <ButtonLight type="button" key={genre.id}>
                    {genre.name}
                  </ButtonLight>
              ))}
            </div>
          </div>
          <div className={style.genres}>
            <Title tag="h4">
              Escolha um dos Streamings de filmes
            </Title>
            <div className="genres_container">
              {streamingProviders?.map(provider => (
                  <ButtonLight type="button" key={provider.provider_id}>
                    {provider.provider_name}
                  </ButtonLight>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </BaseLayout>
  )
}
