import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../components/postList/postListSlice';
import commentListReducer from '../components/commentList/commentListSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    commentList: commentListReducer
  },
});
