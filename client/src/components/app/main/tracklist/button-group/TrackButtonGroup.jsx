import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import YoutubeSearchedForRoundedIcon from '@material-ui/icons/YoutubeSearchedForRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { moveTrackDown, moveTrackUp } from '../../../../../redux/tracksSlice';

function TrackButtonGroup({ index }) {
  const dispatch = useDispatch();

  const handleUpButtonClick = () => {
    dispatch(moveTrackUp(index));
  };

  const handleDownButtonClick = () => {
    dispatch(moveTrackDown(index));
  };

  return (
    <ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="Tracklist row button group"
      variant="text"
    >
      <Button aria-label="move track up" onClick={handleUpButtonClick}>
        <KeyboardArrowUpRoundedIcon />
      </Button>
      <Button aria-label="search using this track">
        <YoutubeSearchedForRoundedIcon />
      </Button>
      <Button aria-label="move track down" onClick={handleDownButtonClick}>
        <KeyboardArrowDownRoundedIcon />
      </Button>
    </ButtonGroup>
  );
}

TrackButtonGroup.propTypes = {
  index: PropTypes.number.isRequired,
};

export default TrackButtonGroup;
