import React from 'react';
import { useSelector } from 'react-redux';

import './Tracklist.css';

import TracklistRow from './tracklist-row/TracklistRow';

function Tracklist() {
  let renderedTracks = null;
  const tracks = useSelector((state) => state.tracks.tracklist);

  if (tracks !== undefined) {
    renderedTracks = tracks.map((track, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <TracklistRow key={`${index}-${track.id}`} track={track} index={index} />
    ));
  }

  return (
    <div className="tracklist">
      {renderedTracks}
    </div>
  );
}

export default Tracklist;
