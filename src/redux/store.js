/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './features/commentSlice';
import likeReducer from './features/likeSlice';

export const store = configureStore({
  reducer: {
    comments: commentReducer,
    like: likeReducer,
  },
});
