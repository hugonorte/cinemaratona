
import { useEffect } from 'react';
import { useGenresStore } from '../../store/useMovieGenres'
import {useStreamingProvidersStore } from '../../store/useStreamingProviders'
import BaseLayout from '../../components/layout';
import style from './style.module.scss'

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
    <div className={style.container}></div>
    </BaseLayout>
  )
}
