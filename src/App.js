import React from 'react';
import './App.css';
//import  PostList  from './components/postList/PostList';
import  CommentList  from './components/commentList/CommentList';
import Header from './components/header/Header';
import SidebarList from './components/sidebarList/SidebarList';

function App() {
  
  return (
    <div>
      <Header />
      <SidebarList />
    </div>
  );
}
//<PostList />
//<CommentList />

export default App;