import React, { useState } from "react";
import movies from "../data/movies";
import MovieCard from "./MovieCard";
import GenreFilter from "./GenreFilter";
import "../styles/MovieList.css";

function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = [...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="container">
      <h1>Movie List</h1>

      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={(event) => setSelectedGenre(event.target.value)}
      />

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;