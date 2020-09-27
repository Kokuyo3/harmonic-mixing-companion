import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToTracklist, removeFromTracklist } from '../../../../../redux/tracksSlice';
import './Track.css';

function Track({ position, track, showAddButton }) {
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(addToTracklist(track));
  };
  const handleRemoveButtonClick = () => {
    dispatch(removeFromTracklist(track, position));
  };

  const artists = track.artists.map((artist) => artist.name);

  return (
    <div className="track-card">
      <img src={track.albumArtUrl} alt="Track Art" />
      <div className="track-card__details">
        <div className="track-card__details--artists">
          {artists.join(', ')}
        </div>
        <div className="track-card__details--track-name">
          {track.name}
        </div>
        <div className="track-card__details--features">
          <span className="bpm">{`${Math.round(track.features.tempo)} BPM`}</span>
          <span className="track-key">{pitchClassToTonal(track.features.key, track.features.mode)}</span>
        </div>
      </div>
      {showAddButton
        ? <button className="track-card__add-btn" type="button" onClick={handleAddButtonClick}>+</button>
        : <button className="track-card__remove-btn" type="button" onClick={handleRemoveButtonClick}>X</button>}
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

Track.propTypes = {
  position: PropTypes.number,
  showAddButton: PropTypes.bool.isRequired,
  track: PropTypes.shape({
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

Track.defaultProps = {
  position: null,
};

export default Track;
