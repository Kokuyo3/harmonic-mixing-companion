import React, { useState } from 'react';
import api from '../../../../util/api';
import './Search.css';

function Search() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    console.log('handleSubmit');

    event.preventDefault();

    api.get(`/api/search?q=${value}`)
      .then((results) => { console.log(results); })
      .catch((error) => { console.log(error); });
  };

  return (
    <div className="Search-area">
      <form id="search-form">
        <input
          type="text"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for a song..."
        />
        <button
          type="submit"
          name="submit"
          aria-label="Submit search"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
