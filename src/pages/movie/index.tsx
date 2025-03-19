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

    return (
        <BaseLayout>
            <div className={style.container}>
                <div>
                </div>
                    <SearchResultsContainer>
                        <Title tag="h1">
                            {movieDetails.title}
                        </Title>
                        <div className={style.details}>
                            <div className={style.cover}>
                                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${moviePoster.posters[0].file_path}`} alt={movieDetails.title} />
                            </div>
                            <div className="description">
                                <strong>Descrição:</strong> 
                                <p>{movieDetails.overview}</p>
                                <strong>Data de Lançamento:</strong>
                                <p> {movieDetails.release_date}</p>
                                <strong>Nota Média:</strong>
                                <AverageRating rating={movieDetails.vote_average} />
                            </div>
                        </div>
                    </SearchResultsContainer>
            </div>
        </BaseLayout>
    )
}
