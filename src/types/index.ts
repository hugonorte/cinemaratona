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

export interface MovieState {
    movies: Movie[];
    fetchMovies: (title: string) => Promise<void>;
  }