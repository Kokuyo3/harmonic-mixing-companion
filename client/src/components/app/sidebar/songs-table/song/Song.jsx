import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToTracklist, removeFromTracklist } from '../../../../../redux/songsSlice';
import './Song.css';

function Song({ song, showAddButton }) {
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(addToTracklist(song));
  };
  const handleRemoveButtonClick = () => {
    dispatch(removeFromTracklist(song));
  };

  const artists = song.artists.map((artist) => artist.name);

  return (
    <div className="song-card">
      <img src={song.albumArtUrl} alt="Song Art" />
      <div className="song-card__details">
        <div className="song-card__details--artists">
          {artists.join(', ')}
        </div>
        <div className="song-card__details--song-name">
          {song.name}
        </div>
        <div className="song-card__details--features">
          <span className="bpm">{`${Math.round(song.features.tempo)} BPM`}</span>
          <span className="song-key">{pitchClassToTonal(song.features.key, song.features.mode)}</span>
        </div>
      </div>
      {showAddButton
        ? <button className="song-card__add-btn" type="button" onClick={handleAddButtonClick}>+</button>
        : <button className="song-card__remove-btn" type="button" onClick={handleRemoveButtonClick}>X</button>}
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

Song.propTypes = {
  showAddButton: PropTypes.bool.isRequired,
  song: PropTypes.shape({
    albumId: PropTypes.string.isRequired,
    albumArtUrl: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string.isRequired,
    features: PropTypes.shape({
      key: PropTypes.number.isRequired,
      mode: PropTypes.number.isRequired,
      tempo: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Song;
