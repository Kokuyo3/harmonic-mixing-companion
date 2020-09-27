/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const swapArrayElements = (array, indexA, indexB) => {
  const temp = array[indexA];

  array[indexA] = array[indexB];
  array[indexB] = temp;
};

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    results: {},
    tracklist: [],
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    addToTracklist: (state, action) => {
      state.tracklist.push(action.payload);
    },
    removeFromTracklist: (state, action) => {
      state.tracklist = state.tracklist.filter((track) => (
        state.tracklist.indexOf(track) !== action.payload
      ));
    },
    moveTrackUp: (state, action) => {
      const index = action.payload;

      if (index !== 0) {
        swapArrayElements(state.tracklist, index, index - 1);
      }
    },
    moveTrackDown: (state, action) => {
      const index = action.payload;

      if (index !== state.tracklist.length - 1) {
        swapArrayElements(state.tracklist, index, index + 1);
      }
    },
  },
});

export const {
  setResults, addToTracklist, removeFromTracklist, moveTrackUp, moveTrackDown,
} = tracksSlice.actions;

export default tracksSlice.reducer;
