import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../components/postList/postListSlice';
import commentListReducer from '../components/commentList/commentListSlice';
import sidebarListReducer from '../components/sidebarList/sidebarListSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    commentList: commentListReducer,
    sidebarList: sidebarListReducer
  },
});
