/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import comments from '../../components/data/comment';

const initialState = {
  commentsLog: comments,
  likes: 0,
  isLoading: true,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
});

console.log(commentSlice);

export default commentSlice.reducer;
