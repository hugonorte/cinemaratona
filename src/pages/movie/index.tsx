import { useEffect } from "react";
import style from "./style.module.scss";
import { useParams } from "react-router";
import { useMovieDetailsStore } from "../../store/useMovieDetailsStore";
import { useMoviePostersStore } from "../../store/useMoviePostersStore";
import { useSelectedMovieStore } from "@/store/useSelectedMovie";
import { useCastStore } from "../../store/useCastStore";
import { useBrProviderStore } from "../../store/useBrProvidersStore";
import BaseLayout from "@/components/layout";
import Title from "@/components/title";
import SearchResultsContainer from "@/components/search/search_results";
import AverageRating from "@/components/avg_rating";
import avatarNotFound from "../../assets/img/avatar_not_found.svg";
import WatchedBtn from "@/components/button/watched";
import AddToListBtn from "@/components/button/addToList";
import RecommendBtn from "@/components/button/recommend";
import netflix from "../../assets/img/streamings/netflix.svg";
import disney_plus from "../../assets/img/streamings/disney.svg";
import amazon from "../../assets/img/streamings/amazon.svg";
import globoplay from "../../assets/img/streamings/globoplay.svg";
import max from "../../assets/img/streamings/max.svg";
import paramount from "../../assets/img/streamings/paramount.svg";
import apple from "../../assets/img/streamings/apple.svg";
import Loading from "@/components/loading";
import FavoriteBtn from "@/components/button/addTofavorite";
import EvaluateBadge from "@/components/evaluate";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import RatingMovieModal from "@/components/evaluate/modal";

export default function Movie() {
    const { id } = useParams<{ id: string }>();
    const { movieDetails, fetchMovieDetails, isLoading } = useMovieDetailsStore();
    const { moviePoster, fetchMoviePosters } = useMoviePostersStore();
    const { setSelectedMovie, clearSelectedMovie } = useSelectedMovieStore();
    const { staff, fetchCast } = useCastStore();
    const { brProvider, fetchBrProvider } = useBrProviderStore();
    const year = movieDetails?.release_date.split("-")[0];
    const month = movieDetails?.release_date.split("-")[1];
    const day = movieDetails?.release_date.split("-")[2];
    const rating = Math.round((movieDetails?.vote_average ?? 0) * 10) / 10;
    const director = staff?.crew && staff.crew.filter(x => x.job === "Director")[0]?.name || 'Diretor não encontrado';
 

    useEffect(() => {
        if (id) {
            clearSelectedMovie();
            fetchMovieDetails(Number(id));
            fetchMoviePosters(Number(id));
            fetchCast(Number(id));
            fetchBrProvider(Number(id));
            setSelectedMovie({
                id: Number(id),
                title: movieDetails?.title ?? "",
                releaseDate: movieDetails?.release_date ?? "",
                posterPath: movieDetails?.poster_path ?? ""
            });
        }
    }, [id, clearSelectedMovie, fetchMovieDetails, fetchMoviePosters, fetchCast, fetchBrProvider, setSelectedMovie, movieDetails?.title, movieDetails?.release_date, movieDetails?.poster_path]);

    if (!movieDetails) {
        return <Loading />;
    }
    if (!moviePoster) {
        return <Loading />;
    }

    return (
        <BaseLayout>
            <div className={style.container}>
                {
                    isLoading ? (
                        <Loading />
                    ) : (

                        <SearchResultsContainer>
                            <Title tag="h1">
                                {movieDetails.title} ({year})
                            </Title>
                            <div className={style.details}>
                                <div className={style.cover}>
                                    <img src={moviePoster.posters.length > 0 ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${moviePoster.posters[0].file_path}` : `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movieDetails.poster_path}`} alt={movieDetails.title} />
                                    <WatchedBtn />
                                    <FavoriteBtn />
                                    <AddToListBtn />
                                    <RecommendBtn />
                                </div>
                                <div className={style.description}>
                                    <strong>Nota Média:</strong>
                                    <AverageRating rating={rating} />
                                    <div>
                                        <Dialog>
                                            <DialogTrigger>
                                                <EvaluateBadge />
                                            </DialogTrigger>
                                            <DialogContent className="bg-white h-1/3" aria-describedby={undefined}>
                                                <DialogHeader>
                                                    <DialogTitle>Dê a sua nota para esse filme</DialogTitle>
                                                    <DialogDescription asChild>
                                                        <RatingMovieModal />
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                    {
                                        (brProvider?.flatrate?.length ?? 0) > 0 ?
                                            (
                                                <>
                                                    <strong>Disponível em:</strong>
                                                    <div className={style.providers}>
                                                        {
                                                            brProvider?.flatrate?.map(
                                                                provider => {
                                                                    switch (provider.provider_id) {
                                                                        case 8:
                                                                            return (<img src={netflix} alt={provider.provider_name} key={provider.provider_id} />);
                                                                        case 119:
                                                                            return (<img src={amazon} alt={provider.provider_name} key={provider.provider_id} />);
                                                                        case 1899:
                                                                            return (<img src={max} alt={provider.provider_name} key={provider.provider_id} />);
                                                                        case 531:
                                                                            return (<img src={paramount} alt={provider.provider_name} key={provider.provider_id} />);
                                                                        case 337:
                                                                            return (<img src={disney_plus} alt={provider.provider_name} key={provider.provider_id} />);
                                                                        case 2:
                                                                            return (<img src={apple} alt={provider.provider_name} key={provider.provider_id} />);
                                                                        case 307:
                                                                            return (<img src={globoplay} alt={provider.provider_name} key={provider.provider_id} />);
                                                                        default:
                                                                            return (<Title tag="p" key={provider.provider_id}>{provider.provider_name}</Title>);
                                                                    }
                                                                }
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
                                    <p>{movieDetails.overview.length === 0 ? "Nenhuma descrição até o momento" : movieDetails.overview}</p>
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
                                            : ""

                                    ))}
                                </div>
                            </div>
                        </SearchResultsContainer>

                    )
                }
            </div>
        </BaseLayout>
    )
}
