import React, { useState } from "react";
import { create } from "zustand";
import { MovieState } from "../../types";
import Title from "../../components/title";
import BaseLayout from "../../components/layout";
import Search from "../../components/search/input";
import SearchResultsContainer from "../../components/search/search_results";
import CardMovieSearch from "../../components/card/movie/search";
import style from "./style.module.scss";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjNlMDdmNWY5ZmZmYmZkZDdjNWZjNDQxMGY4MzU0ZiIsIm5iZiI6MTU1MDQxMzEwMy41NDcwMDAyLCJzdWIiOiI1YzY5NmQyZjkyNTE0MTdkZjQwNDE0OTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kjEgvXZiIApfzW8_hhoyav3Q-C5WQqbDbadhAXxoaZs'
  }
};

const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  fetchMovies: async (title: string) => {
    const response = await fetch(`${BASE_URL}?query=${title}`, options);
    const data = await response.json();
      set({ movies: data.results || [] });
  },
}));

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const { movies, fetchMovies } = useMovieStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      fetchMovies(query);
    }
  };

  return (
    <BaseLayout>
      <div className={style.container}>
        <section>
          <Title tag="h1" customColor="#FFCC33">
            Buscar Filmes
          </Title>
          <Search
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o nome do filme..."
            onSubmit={handleSearch}
          />
        </section>
        {
          movies.length > 0 ? (
            <SearchResultsContainer>
              {movies.map((movie) => (
                <CardMovieSearch img_source={movie.poster_path} title={movie.title} key={movie.id} release_date={movie.release_date} />
              ))}
            </SearchResultsContainer>
          ) : (
            <p>Nenhum filme encontrado</p>
          )
        }
      </div>
    </BaseLayout>
  );
};

export default MovieSearch;
