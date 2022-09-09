/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import comments from '../../components/data/comment';

// const initialState = {
//   commentsLog: comments,
//   likes: 0,
//   isLoading: true,
// };

const initialState = [
  {
    id: 1,
    name: 'Chewybacca',
    avatar: 'https://somelink',
    zodiac: 'Cancer',
    enneagram: '5 wing 6',
    mbti: 'INTA',
    comments:
      'Fugiat sunt aute labore fugiat sit magna eiusmod ad ex ut incididunt sunt. Id incididunt ullamco excepteur consequat nisi ex dolor consectetur. Id voluptate esse do proident elit enim consectetur do dolor deserunt ad ipsum nisi nulla. Eu occaecat ullamco fugiat proident dolor irure. Et est veniam consequat commodo eu culpa ea esse voluptate nulla commodo enim. Amet pariatur nostrud nulla voluptate ut aute ad esse quis ipsum.',
    avatarUrl:
      'https://image.shutterstock.com/image-photo/cannes-france-may-15-2018-260nw-1091863499.jpg',
    title: 'Fugiat sunt aute labore',
    likes: 1,
  },
  {
    id: 2,
    name: 'Blunty',
    avatar: 'https://somelink',
    zodiac: 'Sagitaurus',
    enneagram: '5 wing 6',
    mbti: 'INTJ-M',
    comments:
      'Enim eu sint ut do ea cillum id reprehenderit cupidatat anim mollit. Sit sit nisi est deserunt ullamco culpa. Nostrud aliquip non duis aute qui magna sint. Anim laboris quis nisi magna et reprehenderit sunt veniam mollit consequat duis anim occaecat culpa.',
    avatarUrl: 'https://www.aceshowbiz.com/images/photo/james_blunt.jpg',
    title: 'Enim eu sint',
    likes: 0,
  },
];

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
  },
});

console.log(commentSlice);

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
