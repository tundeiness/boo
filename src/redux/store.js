/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './features/commentSlice';

export const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});
