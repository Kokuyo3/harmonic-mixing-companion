import React from 'react';
import { useSelector } from 'react-redux';

import Song from './song/Song';

function SongsTable() {
  let renderedSongs = null;
  const songs = useSelector((state) => state.songs.results.items);

  if (songs !== undefined) {
    renderedSongs = songs.map((song) => {
      const artists = song.artists.map((artist) => artist.name);

      return (
        <Song
          key={song.id}
          artist={artists.join(', ')}
          name={song.name}
          songKey={pitchClassToTonal(song.features.key, song.features.mode)}
          bpm={Math.round(song.features.tempo)}
          albumArtUrl={song.albumArtUrl}
        />
      );
    });
  }

  return (
    <div className="songs-table">
      {renderedSongs}
    </div>
  );
}

function pitchClassToTonal(key, mode) {
  let tonalKey = null;

  switch (key) {
    case 0:
      tonalKey = 'C';
      break;
    case 1:
      tonalKey = 'C#/Db';
      break;
    case 2:
      tonalKey = 'D';
      break;
    case 3:
      tonalKey = 'D#/Eb';
      break;
    case 4:
      tonalKey = 'E';
      break;
    case 5:
      tonalKey = 'F';
      break;
    case 6:
      tonalKey = 'F#/Gb';
      break;
    case 7:
      tonalKey = 'G';
      break;
    case 8:
      tonalKey = 'G#/Ab';
      break;
    case 9:
      tonalKey = 'A';
      break;
    case 10:
      tonalKey = 'A#/Bb';
      break;
    case 11:
      tonalKey = 'B';
      break;
    default:
      throw new Error(`Unknown Pitch Class or Modality: ${key} ${mode}`);
  }

  return mode === 1 ? `${tonalKey} maj` : `${tonalKey} min`;
}

export default SongsTable;
