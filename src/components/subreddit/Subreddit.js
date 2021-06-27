import React, { useEffect } from 'react';
import PostList from '../postList/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { loadSubReddit, deleteSubreddit, selectSubReddit } from './subredditSlice';
import './subreddit.css';
import { getSubscribers } from '../../utils';


function Subreddit (props) {
    
    const { match } = props;
    const dispatch = useDispatch();
    const { isLoading, hasError } = useSelector((state) => state.subreddit);
    // Load subreddit data
    const groupLink = `https://www.reddit.com/r/${match.params.subreddit}/about.json`; // currently test link for specific post
    
    const defaultIconUrl = "https://i.redd.it/snoovatar/snoovatars/8658e16c-55fa-486f-b7c7-00726de2e742.png";
    const defaultBannerUrl = "https://b.thumbs.redditmedia.com/VQ9Hvimc-54M7j6m2Ye1Bpix_iiaXh5ulYhUwkcyqqA.png";

    useEffect(() => {
        dispatch(deleteSubreddit());
        dispatch(loadSubReddit(groupLink));
    }, [dispatch, groupLink]);

    const { name, description, members, online, icon, banner} = useSelector(selectSubReddit);
    const postsLink = `https://www.reddit.com/${name}/.json`; // dyanmically build link to API to download posts from subreddit

        
    if (isLoading){
        return (
            <div className="subreddit-page">
                <h1>Loading...</h1>
            </div>
        );
    }
    if (hasError){
        return (
           <div className="subreddit-page">
               <h1>Ooops!  Something went wrong.  Reload and try again.</h1>
           </div>
        );
    }

    return (
        <div className="subreddit-page">
            <div className="container">
                <div className="banner" style={{
                    backgroundImage: `url(${banner? banner : defaultBannerUrl})`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                }}></div>
                <div className="subreddit-title">
                    <img src={icon ? icon : defaultIconUrl} alt="icon"/>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div className="subreddit-members">
                    <p className="members">{`${getSubscribers(members)} Members`}</p>
                    <p className="online">{`${getSubscribers(online)} Online`}</p>
                </div>
            </div>
            <PostList link={postsLink} />
        </div>
    );

}

export default Subreddit