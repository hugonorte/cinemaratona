export interface Movie {
  id: number,
  genres: Genre[],
  title: string,
  overview: string,
  release_date: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  popularity: number,
  original_language: string,
  original_title: string,
  video: boolean,
  origin_country: string[],
}

export interface Provider {
  display_priority: number,
  logo_path: string,
  provider_id: number,
  provider_name: string
}
export interface Staff {
  id: number,
  cast: Actor[] | null,
  crew: Crew[] | null
}
export interface Actor {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: 8,
  profile_path: string,
  cast_id: 5,
  character: string,
  credit_id: string,
  order: number
}

export interface Crew {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: 8,
  profile_path: string,
  cast_id: 5,
  character: string,
  credit_id: string,
  order: number
  department: string
  job: string
}


export interface MoviePoster {
  backdrops: string[],
  id: number,
  logos: string[],
  posters: {
    aspect_ratio: number,
    file_path: string,
    height: number,
    iso_639_1: string,
    vote_average: number,
    vote_count: number,
    width: number
  }[],
}

export interface BrProvider {
  link: string,
  rent: Provider[],
  flatrate: Provider[],
  buy: Provider[]
}

export interface Flatrate {
  display_priority: number,
  logo_path: string,
  provider_id: number,
  provider_name: string
}

export interface Genre {
  id: number,
  name: string
}
export interface StreamingProvider {
  display_priorities: object,
  display_priority: string,
  logo_path: string,
  provider_id: number,
  provider_name: string
}

export interface MovieState {
    movies: Movie[];
    fetchMovies: (title?: string, genre_id?:number, provider_id?:number) => Promise<void>;
    isLoading: boolean;
}
export interface TopRatedMovieState {
    topRatedmovies: Movie[];
    fetchTopRatedMovies: () => Promise<void>;
}
export interface PopularMovieState {
    popularMovies: Movie[];
    fetchPopularMovies: () => Promise<void>;
}
export interface MovieDetailsState {
    movieDetails: Movie | null;
    fetchMovieDetails: (movie_id: number) => Promise<void>;
    isLoading: boolean;
}
export interface MoviePosterState {
    moviePoster: MoviePoster | null;
    fetchMoviePosters: (movie_id: number) => Promise<void>;
}

export interface GenreState {
  genres: Genre[] | null;
  fetchGenres: () => Promise<void>;
  isLoading: boolean;
}
export interface StreamingProviderState {
  streamingProviders: StreamingProvider[] | null;
  fetchStreamingProviders: () => Promise<void>;
  isLoading: boolean;
}

export interface CastState {
  staff: Staff | null;
  fetchCast: (movie_id: number) => Promise<void>;
}

export interface brProviderState {
  brProvider: BrProvider | null;
  fetchBrProvider: (movie_id: number) => Promise<void>;
}

  