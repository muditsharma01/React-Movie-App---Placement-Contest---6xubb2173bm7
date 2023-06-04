import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
