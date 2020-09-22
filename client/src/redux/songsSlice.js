/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import api from '../util/api';

export const songsSlice = createSlice({
  name: 'songs',
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
      state.tracklist = state.tracklist.filter((track) => track.id !== action.payload.id);
    },
  },
});

export const { setResults, addToTracklist, removeFromTracklist } = songsSlice.actions;

export default songsSlice.reducer;

const search = (query) => async (dispatch, getState) => {
  try {
    const results = await api.get(`/api/search?q=${query}`);

    dispatch(setResults(results));
  } catch (err) {
    console.log(err);
  }
};
