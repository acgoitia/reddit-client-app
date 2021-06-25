import React from 'react';
import './App.css';
import  PostList  from './components/postList/PostList';
import  CommentList  from './components/commentList/CommentList';
import Header from './components/header/Header';
import SidebarList from './components/sidebarList/SidebarList';
import Subreddit from './components/subreddit/Subreddit';
import PostwComments from './components/postwComments/PostwComments';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  const homepageLink = "https://www.reddit.com/.json";

  return (
    <div>
      <Router>
        <Header />
        <main>
          <SidebarList />
          <Switch>
            <Route exact path="/">
              <PostList link={homepageLink}/>
            </Route>
            <Route path="/:id" component={PostwComments} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
//<CommentList />
//<Subreddit />

export default App;