import React, { useState } from 'react';
import './App.css';
import  PostList  from './components/postList/PostList';
import Header from './components/header/Header';
import SidebarList from './components/sidebarList/SidebarList';
import Subreddit from './components/subreddit/Subreddit';
import PostwComments from './components/postwComments/PostwComments';
import { Route, Switch, useHistory } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';


function App() {
  
  
  const history = useHistory();
  const [link, setLink] = useState("https://www.reddit.com/.json");  // default link state is the homepage
  const [endpoint, setEndpoint] = useState("");
  const homepageLink = "https://www.reddit.com/.json";
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target[0].defaultValue;
    setEndpoint(search);
    setLink(`https://www.reddit.com/search/.json?q=${search}`);
    history.push(`/search/${search}`)
  }

  return (
    <div>
      
        <ScrollToTop />
        <Header handleSubmit={handleSubmit}/>
        <main>
          <SidebarList />
          <Switch>
            <Route exact path="/" render={(props) => (
              <PostList {...props} link={homepageLink} />
            )} />
            <Route exact path={`/search/${endpoint}`} render={(props) => (
              <PostList {...props} link={link} endpoint={endpoint} />
            )} />
            <Route exact path="/:id" component={PostwComments} />
            <Route exact path="/r/:subreddit" component={Subreddit} />
            <Route exact path="/results" render={(props) => (
              <PostList {...props} link={link} />
            )} />
          </Switch>
        </main>
      
    </div>
  );
}


export default App;