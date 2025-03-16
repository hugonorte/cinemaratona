export interface Movie {
  id: number,
  genre_ids: number[],
  title: string,
  overview: string,
  release_date: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  popularity: number,
  original_language: string,
  original_title: string,
  video: boolean
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

export interface MovieState {
    movies: Movie[];
    fetchMovies: (title: string) => Promise<void>;
}
export interface MovieDetailsState {
    movieDetails: Movie | null;
    fetchMovieDetails: (movie_id: number) => Promise<void>;
}
export interface MoviePosterState {
    moviePoster: MoviePoster | null;
    fetchMoviePosters: (movie_id: number) => Promise<void>;
}

  