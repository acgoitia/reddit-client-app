import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, resetPosts, loadPosts } from './postListSlice';
import Post from '../post/Post';
import './postList.css';

function PostList (props) {

    const dispatch = useDispatch();
    const { isLoading, hasError } = useSelector((state) => state.postList);
    
    
    const { link, match, endpoint } = props;  

    useEffect(() => {
        dispatch(resetPosts());
        dispatch(loadPosts(link));
    }, [dispatch, link]);
    
    const posts = useSelector(selectPosts)

    if (isLoading){
        return (
            <div className="Post-List">
                <h1 className="loading">Loading...</h1>
            </div>
        );
    }

    if (hasError){
        return (
            <div className="Post-List">
                <h1 className="error">Ooops!  Something went wrong and we couldn't fetch data from server.  Reload and try again.</h1>
            </div>
        );
    }

    return (
        <div className="Post-List">
            {match && ((match.path === "/") && <h2>Popular Posts</h2>)}
            {match && ((match.path === `/search/${endpoint}`) && <h2>{`Search results for: ${endpoint}`}</h2>)}
            <Post posts={posts} />
        </div>
    )

}


export default PostList;