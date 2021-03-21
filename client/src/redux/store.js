import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import songsReducer from './songsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    songs: songsReducer,
  },
});
