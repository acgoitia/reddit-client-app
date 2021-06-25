import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../components/postList/postListSlice';
import commentListReducer from '../components/commentList/commentListSlice';
import sidebarListReducer from '../components/sidebarList/sidebarListSlice';
import subredditReducer from '../components/subreddit/subredditSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    commentList: commentListReducer,
    sidebarList: sidebarListReducer,
    subreddit: subredditReducer
  },
});
