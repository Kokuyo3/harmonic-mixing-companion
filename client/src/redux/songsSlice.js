/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import api from '../util/api';

export const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    results: {},
    selections: [],
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    addSelection: (state, action) => {
      state.selections.push(action.payload);
    },
    removeSelection: (state, action) => {
      state.selections.splice(action.payload, 1);
    },
  },
});

export const { setResults, addSelection, removeSelection } = songsSlice.actions;

export default songsSlice.reducer;

const search = (query) => async (dispatch, getState) => {
  try {
    const results = await api.get(`/api/search?q=${query}`);

    dispatch(setResults(results));
  } catch (err) {
    console.log(err);
  }
};
