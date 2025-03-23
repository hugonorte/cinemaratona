import React, { useState } from "react";
import Title from "../../components/title";
import BaseLayout from "../../components/layout";
import Search from "../../components/search/input";
import SearchResultsContainer from "../../components/search/search_results";
import CardMovieSearch from "../../components/card/movie/search";
import style from "./style.module.scss";
import { useMovieStore } from "../../store/useMovieStore";

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
                <CardMovieSearch img_source={movie.poster_path} title={movie.title} key={movie.id} release_date={movie.release_date} id={movie.id}/>
              ))}
            </SearchResultsContainer>
          ) : (
            ""
          )
        }
      </div>
    </BaseLayout>
  );
};

export default MovieSearch;
