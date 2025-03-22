import { useEffect } from "react";
import style from "./style.module.scss";
import { useParams } from "react-router";
import { useMovieDetailsStore } from "../../store/useMovieDetailsStore";
import { useMoviePostersStore } from "../../store/useMoviePostersStore";
import BaseLayout from "../../components/layout";
import Title from "../../components/title";
import SearchResultsContainer from "../../components/search/search_results";
import AverageRating from "../../components/avg_rating";

export default function Movie() {
    const { id } = useParams<{ id: string }>();
    const { movieDetails, fetchMovieDetails } = useMovieDetailsStore();
    const { moviePoster, fetchMoviePosters } = useMoviePostersStore();

    useEffect(() => {
        if (id) {
            fetchMovieDetails(Number(id));
            fetchMoviePosters(Number(id));
        }
    }, [id, fetchMovieDetails, fetchMoviePosters]);

    if (!movieDetails) {
        return <p>Carregando...</p>;
    }
    if (!moviePoster) {
        return <p>Carregando...</p>;
    }

    const year = movieDetails.release_date.split("-")[0];
    const month = movieDetails.release_date.split("-")[1];
    const day = movieDetails.release_date.split("-")[2];
    const rating = Math.round(movieDetails.vote_average * 10) / 10;

    return (
        <BaseLayout>
            <div className={style.container}>
                <div>
                </div>
                    <SearchResultsContainer>
                        <Title tag="h1">
                            {movieDetails.title} ({year})
                        </Title>
                        <div className={style.details}>
                            <div className={style.cover}>
                                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${moviePoster.posters[0].file_path}`} alt={movieDetails.title} />
                            </div>
                            <div className="description">
                                <strong>Descrição:</strong> 
                                <p>{movieDetails.overview}</p>
                                <strong>Data de Lançamento:</strong>
                                <p> {day}/{month}/{year}</p>
                                <strong>Nota Média:</strong>
                                <AverageRating rating={rating} />
                            </div>
                        </div>
                    </SearchResultsContainer>
            </div>
        </BaseLayout>
    )
}
