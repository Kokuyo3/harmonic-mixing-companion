import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './tracksSlice';

export default configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});
