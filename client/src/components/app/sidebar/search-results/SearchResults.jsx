import React from 'react';
import { useSelector } from 'react-redux';

import Track from './track/Track';

function SearchResults() {
  let renderedTracks = null;
  const tracks = useSelector((state) => state.tracks.results.items);

  if (tracks !== undefined) {
    renderedTracks = tracks.map((track) => (
      <Track key={track.id} track={track} showAddButton />
    ));
  }

  return (
    <div className="search-results">
      {renderedTracks}
    </div>
  );
}

export default SearchResults;
