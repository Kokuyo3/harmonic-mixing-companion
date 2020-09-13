import React from 'react';
import PropTypes from 'prop-types';

import './Song.css';

function Song({
  albumArtUrl, artist, bpm, name, songKey,
}) {
  return (
    <div className="song-card">
      <img src={albumArtUrl} alt="Song Art" />
      <p>
        <span className="song-artist-name-remix">
          {`${artist} - ${name}`}
        </span>
      </p>
      <p>
        <span className="bpm">{`${bpm} BPM`}</span>
        <span className="song-key">{songKey}</span>
      </p>
    </div>
  );
}

Song.propTypes = {
  albumArtUrl: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bpm: PropTypes.number.isRequired,
  songKey: PropTypes.string.isRequired,
};

export default Song;
