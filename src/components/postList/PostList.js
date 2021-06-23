import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, resetPosts, loadPosts } from './postListSlice';
import Post from '../post/Post';

function PostList (props) {

    const dispatch = useDispatch();
    
    // Load Homepage posts
    const homepage = 'https://www.reddit.com/.json';

    useEffect(() => {
        dispatch(resetPosts());
        dispatch(loadPosts(homepage));
    }, [dispatch]);
    

    const posts = useSelector(selectPosts)

    return (
        <Post posts={posts} />
    )

}


export default PostList;