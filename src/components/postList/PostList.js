import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, addPost, resetPosts } from './postListSlice';
import Post from '../post/Post'

function PostList (props) {

    // testing component
    const testPost = {
        title: 'You think you could do this?',
        author: 'Zzazy1',
        subreddit:'r/nextfuckinglevel',
        imageURL:'',
        videoURL: 'https://v.redd.it/t97k9kz473671/DASH_720.mp4?source=fallback',
        numComments: 2223,
        score: 50565,
        datePosted: 1624078199 
}

    const dispatch = useDispatch();
    dispatch(resetPosts());
    dispatch(addPost(testPost));
    dispatch(addPost(testPost));

    // End testing component

    const posts = useSelector(selectPosts)

    return (
        <Post posts={posts} />
    )

}


export default PostList;