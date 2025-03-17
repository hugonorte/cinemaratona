import React, { useState } from "react";
import { useMovieStore } from "../../store/useMovieStore";
import ButtonPrimary from "../../components/button/primary";
import Header from "../../components/header";




function Teste() {
  const [query, setQuery] = useState("");
  const { movies, fetchMovies } = useMovieStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      fetchMovies(query);
    }
  };
  
  return (
    <>
      <Header />
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-xl font-bold text-center">Buscar Filme</h1>
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o nome do filme..."
            className="border p-2 flex-1 rounded"
          />
          {/* <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Buscar
          </button> */}
          <ButtonPrimary type="submit" label="Buscar" className="border"/>
        </form>

        {movies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="border p-4 rounded shadow">
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p className="text-gray-700">{movie.overview}</p>
                <p className="text-gray-500">Lançamento: {movie.release_date}</p>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="mt-4 rounded-lg shadow-md"
                  />
                )}
              </div>
            ))}
          </div>
        ) : <>Nenhum Filme encontrado</>}
      </div>
    </>
  );
}

export default Teste