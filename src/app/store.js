import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../components/post/postSlice';

export const store = configureStore({
  reducer: {
    post: postReducer
  },
});
