import React from "react";

function MovieCard({ movie }) {
  const handleClick = () => {
    alert(`You clicked on "${movie.title}"`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <h2>{movie.title}</h2>

      <p>{movie.genre}</p>

      <p>Released: {movie.releaseYear}</p>
    </div>
  );
}

export default MovieCard;