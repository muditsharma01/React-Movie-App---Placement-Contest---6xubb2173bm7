import React from "react";

const MoviesList = ({ movies, sortBy, onMovieClick }) => {
  const sortedMovies = movies.sort((a, b) => {
    const aYear = parseInt(a.release_date.split("-")[0]);
    const bYear = parseInt(b.release_date.split("-")[0]);
    if (sortBy === "ascending") {
      return aYear - bYear;
    } else {
      return bYear - aYear;
    }
  });

  return (
    <ul>
      {sortedMovies.map((movie) => (
        <li key={movie.id} onClick={() => onMovieClick(movie)}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie-alt" />
          <section className="title-year">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-release-year">Release Year: {movie.release_date.split("-")[0]}</p>
          </section>
        </li>
      ))}
    </ul>
  );
};

const MovieDetails = ({ movie, onClose }) => {
  return (
    <article className="movie-details">
      <section className="movie-detail-img">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie-poster-alt" className="movie-img" />
      </section>
      <section className="movie-detail-title-year-plot">
        <h2 className="movie-title-year">{movie.title} ({movie.release_date.split("-")[0]})</h2>
        <p className="movie-plot">{movie.overview}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </section>
    </article>
  );
};

export { MoviesList, MovieDetails };
