import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComments, resetComments, loadComments } from './commentListSlice';
import Comment from '../comment/Comment';

function CommentList (props) {
    const dispatch = useDispatch();
    const { isLoading, hasError } = useSelector((state) => state.commentList);

     // Load post comments
     const postLink = 'https://www.reddit.com/r/nextfuckinglevel/comments/o6ewmc/mom_of_the_year/.json'; // currently test link for specific post

     useEffect(() => {
         dispatch(resetComments());
         dispatch(loadComments(postLink));
     }, [dispatch]);
     
     const comments = useSelector(selectComments)
 
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
         <Comment comments={comments} />
     )
 

} 



export default CommentList;