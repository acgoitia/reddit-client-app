import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, resetPosts, loadPosts } from './postListSlice';
import Post from '../post/Post';

function PostList (props) {

    const dispatch = useDispatch();
    const { isLoading, hasError } = useSelector((state) => state.postList);
    
    // Load Homepage posts
    const homepage = 'https://www.reddit.com/.json';

    useEffect(() => {
        dispatch(resetPosts());
        dispatch(loadPosts(homepage));
    }, [dispatch]);
    
    const posts = useSelector(selectPosts)

    if (isLoading){
        return (
            <h1>Loading...</h1>
        );
    }

    if (hasError){
        return (
            <h1>Ooops!  Something went wrong and we couldn't fetch data from server.  Reload and try again.</h1>
        );
    }

    return (
        <Post posts={posts} />
    )

}


export default PostList;