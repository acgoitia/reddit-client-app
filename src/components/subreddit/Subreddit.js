import React, { useEffect } from 'react';
import PostList from '../postList/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { loadSubReddit, deleteSubreddit, selectSubReddit } from './subredditSlice';
import './subreddit.css';

// Make page that displays a box on top with basic subreddit info, and righ-hand sidebar with related subreddits if available
// render heading, sidebar, and <Post /> elements inside with data from the page

function Subreddit (props) {
    const dispatch = useDispatch();
    const { isLoading, hasError } = useSelector((state) => state.subreddit);
    // Load subreddit data
    const groupLink = 'https://www.reddit.com/r/AskReddit/about.json'; // currently test link for specific post

    useEffect(() => {
        dispatch(deleteSubreddit());
        dispatch(loadSubReddit(groupLink));
    }, [dispatch]);

    const { name, description, members, online, icon, banner} = useSelector(selectSubReddit);
    const postsLink = `https://www.reddit.com/${name}/.json`; // dyanmically build link to API to download posts from subreddit

        
    if (isLoading){
        return (
            <div className="Subreddit-page">
                <h1>Loading...</h1>
            </div>
        );
    }
    if (hasError){
        return (
           <div className="Subreddit-page">
               <h1>Ooops!  Something went wrong and we couldn't fetch data from server.  Reload and try again.</h1>
           </div>
        );
    }

    return (
        <div className="subreddit-page">
            <img src={banner} alt="banner"/>
            <div className="container">
                <div className="subreddit-title">
                    <img src={icon} alt="icon"/>
                    <h3>{name}</h3>
                </div>
                <p>{description}</p>
                <div className="subreddit-members">
                    <p>{`${members} Members`}</p>
                    <p>{`${online} Online`}</p>
                </div>
            </div>
            <PostList link={postsLink} />
        </div>
    );

}

export default Subreddit