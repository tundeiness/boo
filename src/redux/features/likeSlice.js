/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  like: 0,
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    increment: (state) => {
      state.like += 1;
    },
  },
});

export const { increment } = likeSlice.actions;
export default likeSlice.reducer;
