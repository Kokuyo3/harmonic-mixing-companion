import React from 'react';
import { useSelector } from 'react-redux';

import './Tracklist.css';

import Song from '../../sidebar/songs-table/song/Song';

function Tracklist() {
  let renderedSongs = null;
  const songs = useSelector((state) => state.songs.tracklist);

  if (songs !== undefined) {
    renderedSongs = songs.map((song) => (
      <div className="tracklist__row">
        <span>{`${songs.indexOf(song)} - `}</span>
        <Song key={song.id} song={song} showAddButton={false} />
      </div>
    ));
  }

  return (
    <div className="tracklist">
      {renderedSongs}
    </div>
  );
}

export default Tracklist;
