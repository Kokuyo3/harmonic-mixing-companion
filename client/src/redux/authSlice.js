/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthorized: false,
  },
  reducers: {
    setAuthorizationState: (state, action) => {
      state.authorized = action.payload;
    },
  },
});

export const { setAuthorizationState } = authSlice.actions;

export default authSlice.reducer;
