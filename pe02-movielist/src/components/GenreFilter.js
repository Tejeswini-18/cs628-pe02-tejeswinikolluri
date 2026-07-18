import React from "react";

function GenreFilter({ genres, selectedGenre, onGenreChange }) {
  return (
    <div className="filter-container">
      <select value={selectedGenre} onChange={onGenreChange}>
        <option value="All Genres">All Genres</option>

        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;