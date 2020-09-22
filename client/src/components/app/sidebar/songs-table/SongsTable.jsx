import React from 'react';
import { useSelector } from 'react-redux';

import Song from './song/Song';

function SongsTable() {
  let renderedSongs = null;
  const songs = useSelector((state) => state.songs.results.items);

  if (songs !== undefined) {
    renderedSongs = songs.map((song) => (
      <Song key={song.id} song={song} showAddButton />
    ));
  }

  return (
    <div className="songs-table">
      {renderedSongs}
    </div>
  );
}

export default SongsTable;
