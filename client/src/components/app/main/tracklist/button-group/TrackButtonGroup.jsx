import React from 'react';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import YoutubeSearchedForRoundedIcon from '@material-ui/icons/YoutubeSearchedForRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function TrackButtonGroup() {
  return (
    <ButtonGroup
      orientation="vertical"
      color="primary"
      aria-label="Tracklist row button group"
      variant="text"
    >
      <Button aria-label="move track up">
        <KeyboardArrowUpRoundedIcon />
      </Button>
      <Button aria-label="search using this track">
        <YoutubeSearchedForRoundedIcon />
      </Button>
      <Button aria-label="move track down">
        <KeyboardArrowDownRoundedIcon />
      </Button>
    </ButtonGroup>
  );
}

export default TrackButtonGroup;
