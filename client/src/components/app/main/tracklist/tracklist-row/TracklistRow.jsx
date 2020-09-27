import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Track from '../../../sidebar/search-results/track/Track';
import TrackButtonGroup from '../button-group/TrackButtonGroup';

function TracklistRow({ track, index }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="tracklist__row"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span>{`${index + 1} - `}</span>
      {isShown && <TrackButtonGroup className="tracklist__row_button-group" index={index} />}
      <Track index={index} track={track} showAddButton={false} />
    </div>
  );
}

TracklistRow.propTypes = {
  index: PropTypes.number.isRequired,
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

export default TracklistRow;
