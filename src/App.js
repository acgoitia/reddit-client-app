import React from 'react';
import './App.css';
//import  PostList  from './components/postList/PostList';
import  CommentList  from './components/commentList/CommentList';
import Header from './components/header/Header'

function App() {
  
  return (
    <div>
      <Header />
      <CommentList />
    </div>
  );
}
//<PostList />

export default App;