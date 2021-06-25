import React from 'react';
import './App.css';
import  PostList  from './components/postList/PostList';
import  CommentList  from './components/commentList/CommentList';
import Header from './components/header/Header';
import SidebarList from './components/sidebarList/SidebarList';
import Subreddit from './components/subreddit/Subreddit';

function App() {
  
  return (
    <div>
      <Header />
      <Subreddit />
    </div>
  );
}
//<SidebarList />
//<PostList />
//<CommentList />

export default App;