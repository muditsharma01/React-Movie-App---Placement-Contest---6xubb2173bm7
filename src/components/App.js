import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';
import { MoviesList, MovieDetails } from './MoviesList&Detail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [sortBy, setSortBy] = useState("descending");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, [searchTitle]);

  const fetchMovies = async () => {
    try {
      const API_KEY = '4e44d9029b1270a757cddc766a1bcb63';
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTitle}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTitle(searchTerm);
  };

  const handleSortClick = () => {
    setSortBy(sortBy === "descending" ? "ascending" : "descending");
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div id="main">
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <button className="sort-btn" onClick={handleSortClick}>
        Sort Movies by release year ({sortBy})
      </button>
      <MoviesList movies={movies} sortBy={sortBy} onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseMovieDetails} />
      )}
    </div>
  );
};

export default App;
