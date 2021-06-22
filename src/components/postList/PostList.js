import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, addPost, resetPosts } from './postListSlice';
import Post from '../post/Post';
import { redditJson } from '../../utils';

function PostList (props) {

    const dispatch = useDispatch();
    // testing component
    
    // const testPost = {
    //     title: 'You think you could do this?',
    //     author: 'Zzazy1',
    //     subreddit:'r/nextfuckinglevel',
    //     imageURL:'',
    //     videoURL: 'https://v.redd.it/t97k9kz473671/DASH_720.mp4?source=fallback',
    //     numComments: 2223,
    //     score: 50565,
    //     datePosted: 1624078199 
    // }

    // dispatch(resetPosts());
    // dispatch(addPost(testPost));
    // dispatch(addPost(testPost));
    
    // End testing component

    // Test fetching data
    
    useEffect(() => {
        redditJson('https://www.reddit.com/r/nextfuckinglevel/comments/o2zx46/you_think_you_could_do_this.json')
            .then(post => {
                dispatch(addPost(post));
            });
    }, []);
    

    // End test fetching data

    const posts = useSelector(selectPosts)

    return (
        <Post posts={posts} />
    )

}


export default PostList;