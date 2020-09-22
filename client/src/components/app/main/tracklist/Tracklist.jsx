import React from 'react';
import { useSelector } from 'react-redux';

import './Tracklist.css';

import Track from '../../sidebar/search-results/track/Track';

function Tracklist() {
  let renderedTracks = null;
  const tracks = useSelector((state) => state.tracks.tracklist);

  if (tracks !== undefined) {
    renderedTracks = tracks.map((track) => (
      <div className="tracklist__row">
        <span>{`${tracks.indexOf(track)} - `}</span>
        <Track key={track.id} track={track} showAddButton={false} />
      </div>
    ));
  }

  return (
    <div className="tracklist">
      {renderedTracks}
    </div>
  );
}

export default Tracklist;
