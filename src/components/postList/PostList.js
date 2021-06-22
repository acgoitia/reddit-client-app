import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadPosts, resetPosts } from './postListSlice';
import Post from '../post/Post';
import { redditPost } from '../../utils';

function PostList (props) {

    const dispatch = useDispatch();
    
    // Load Homepage posts
    const homepage = 'https://www.reddit.com/.json';

    useEffect(() => {
        dispatch(resetPosts());
        redditPost(homepage)
            .then(post => {
                dispatch(loadPosts(post));
            });
    }, []);
    

    const posts = useSelector(selectPosts)

    return (
        <Post posts={posts} />
    )

}


export default PostList;