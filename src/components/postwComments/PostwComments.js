import React from 'react';
import Post from '../post/Post';
import CommentList from '../commentList/CommentList';
import { useSelector } from 'react-redux';
import { selectPosts } from '../postList/postListSlice';
import './postwComments.css';


function PostwComments (props) {

    const { match } = props;  // gets the id from the URL passed via the <Link> component
    const posts = useSelector(selectPosts);  // get current state
    const renderedPost = posts.filter(post => post.id === match.params.id); // use the id passed via URL from <Link> to select relevant post
    
    const postLink = `https://www.reddit.com${renderedPost[0].link}.json`; // build relevant link based on post data
    


    return (
        <div className="Post-with-comments">
            <div className="fixed-post" id="exception">
                <Post posts={renderedPost} />  
            </div>
            <CommentList postLink={postLink} />  
        </div>

    );

}

export default PostwComments;