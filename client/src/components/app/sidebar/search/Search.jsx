import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../../../util/api';
import { setResults } from '../../../../redux/songsSlice';

import './Search.css';

function Search() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length > 0) {
      api.get(`/api/search?q=${value.trim()}`)
        .then(({ data }) => {
          dispatch(setResults(data.tracks));
        }).catch((err) => {
          console.log(err);
        });
    } else {
      document.getElementById('search-form').insertAdjacentHTML('beforebegin',
        '<div class="invalid-search-alert">'
        + 'Invalid search query! Try again.'
        + '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>'
        + '</div>');
    }
  };

  return (
    <div className="Search-area">
      <form id="search-form" onSubmit={handleSubmit}>
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
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
