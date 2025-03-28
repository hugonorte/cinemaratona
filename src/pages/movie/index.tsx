import { useEffect } from "react";
import style from "./style.module.scss";
import { useParams } from "react-router";
import { useMovieDetailsStore } from "../../store/useMovieDetailsStore";
import { useMoviePostersStore } from "../../store/useMoviePostersStore";
import { useCastStore } from "../../store/useCastStore";
import { useBrProviderStore } from "../../store/useBrProvidersStore";
import BaseLayout from "../../components/layout";
import Title from "../../components/title";
import SearchResultsContainer from "../../components/search/search_results";
import AverageRating from "../../components/avg_rating";
import ButtonLight from "../../components/button/light";
import avatarNotFound from "../../assets/img/avatar_not_found.svg";
import WatchedBtn from "../../components/button/watched";
import AddToListBtn from "../../components/button/addToList";
import RecommendBtn from "../../components/button/recommend";

export default function Movie() {
    const { id } = useParams<{ id: string }>();
    const { movieDetails, fetchMovieDetails } = useMovieDetailsStore();
    const { moviePoster, fetchMoviePosters } = useMoviePostersStore();
    const { staff, fetchCast } = useCastStore();
    const { brProvider, fetchBrProvider } = useBrProviderStore();

    useEffect(() => {
        if (id) {
            fetchMovieDetails(Number(id));
            fetchMoviePosters(Number(id));
            fetchCast(Number(id));
            fetchBrProvider(Number(id));
        }
    }, [id, fetchMovieDetails, fetchMoviePosters, fetchCast, fetchBrProvider]);

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
    const director = staff?.crew && staff.crew.filter(x => x.job === "Director")[0]?.name || 'Diretor não encontrado';
    
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
                            <img src={moviePoster.posters.length > 0 ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${moviePoster.posters[0].file_path}` : `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movieDetails.poster_path}`} alt={movieDetails.title} />
                            <AddToListBtn />
                            <WatchedBtn />
                            <RecommendBtn />
                        </div>
                        <div className={style.description}>
                            <strong>Nota Média:</strong>
                            <AverageRating rating={rating} />
                            {
                                (brProvider?.flatrate?.length ?? 0) > 0 ?
                                (
                                    <>
                                        <strong>Disponível em:</strong>
                                        <div className={style.providers}>
                                        {
                                            brProvider?.flatrate?.map(
                                                provider => (
                                                    <img src={`https://image.tmdb.org/t/p/w45/${provider.logo_path}`} alt={provider.provider_name} key={provider.provider_id}/>
                                                )
                                            )
                                        }
                                        </div>
                                    </>
                                ) : ""
                            }
                            <strong>País:</strong>
                            <p>{movieDetails.origin_country.map(x => x)}</p>
                            <strong>Título Original:</strong>
                            <p>{movieDetails.original_title}</p>
                            <strong>Diretor:</strong>
                            <p>{director}</p>
                            <strong>Gênero:</strong>
                            <p>{movieDetails.genres.map(x => x.name).join(", ")}</p>
                            <strong>Descrição:</strong>
                            <p>{movieDetails.overview.length===0?"Nenhuma descrição até o momento":movieDetails.overview}</p>
                            <strong>Data de Lançamento:</strong>
                            <p> {day}/{month}/{year}</p>
                        </div>
                        <div className={style.cast}>
                            <strong>Elenco:</strong>
                            {staff?.cast?.map((actor) => (
                               actor.known_for_department === "Acting" ?
                                (
                                    <div key={actor.cast_id} className={style.actor}>
                                        <img src={
                                            actor.profile_path === null ? 
                                            avatarNotFound : 
                                            `https://image.tmdb.org/t/p/w45/${actor.profile_path}`
                                            } alt={actor.name} />
                                        <div className={style.actor_info}>
                                            <strong>{actor.name}</strong>
                                            <p>
                                            {actor.character}
                                            </p>
                                        </div>
                                    </div>
                                )
                                :""
                                        
                            ))}
                        </div>
                    </div>
                </SearchResultsContainer>
            </div>
        </BaseLayout>
    )
}
