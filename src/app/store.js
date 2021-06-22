import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../components/postList/postListSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer
  },
});
