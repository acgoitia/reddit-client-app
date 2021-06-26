import React from 'react';
import './App.css';
import  PostList  from './components/postList/PostList';
import Header from './components/header/Header';
import SidebarList from './components/sidebarList/SidebarList';
import Subreddit from './components/subreddit/Subreddit';
import PostwComments from './components/postwComments/PostwComments';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  
  const homepageLink = "https://www.reddit.com/.json";

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <SidebarList />
          <Switch>
            <Route exact path="/" render={(props) => (
              <PostList {...props} link={homepageLink} />
            )} />
            <Route exact path="/:id" component={PostwComments} />
            <Route exact path="/r/:subreddit" component={Subreddit} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}


export default App;