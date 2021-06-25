import React, { useEffect } from 'react';
import Post from '../post/Post';
import CommentList from '../commentList/CommentList';
import { useSelector } from 'react-redux';
import { selectPosts } from '../postList/postListSlice';


function PostwComments (props) {

    // have local state to capture the relevant post from the posts array in store
    // Post properties:  posts: array of posts.  in this case an array with only 1 value
    // CommentList properties:  no props yet but will need to pass a link to where to extract the comments list

    const posts = useSelector(selectPosts)
    const renderedPost = posts[0]; // testing for now, will need to connect to click event
    //const postLink = 'https://www.reddit.com/r/nextfuckinglevel/comments/o6ewmc/mom_of_the_year/.json';
    const postLink = `https://www.reddit.com${renderedPost.link}.json`;    


    return (
        <div className="main">
            <Post posts={renderedPost} />  
            <CommentList postLink={postLink} />  
        </div>

    );

}

export default PostwComments;