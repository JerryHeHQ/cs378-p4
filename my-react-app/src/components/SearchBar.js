import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className='row' id='search-bar-row'>
      <div className='col' id='search-bar-col'>
        <FaSearch 
          className="search-icon"
          id='search-bar-icon'
          onClick={onSearch(searchTerm)}
        />
        <input
          className="search-input"
          id='search-bar-input'
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default SearchBar;
