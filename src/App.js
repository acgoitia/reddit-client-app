import React from 'react';
import './App.css';
import  PostList  from './components/postList/PostList';
import  CommentList  from './components/commentList/CommentList';
import Header from './components/header/Header';
import SidebarList from './components/sidebarList/SidebarList';
import Subreddit from './components/subreddit/Subreddit';
import PostwComments from './components/postwComments/PostwComments';

function App() {
  
  return (
    <div>
      <Header />
      <SidebarList />
      <PostwComments />
    </div>
  );
}
//<CommentList />
//<Subreddit />
//<PostList />

export default App;