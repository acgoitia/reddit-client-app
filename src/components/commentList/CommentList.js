import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComments, resetComments, loadComments } from './commentListSlice';
import Comment from '../comment/Comment';

function CommentList (props) {
    const dispatch = useDispatch();
    const { isLoading, hasError } = useSelector((state) => state.commentList);
    const { postLink } = props;

     // Load post comments
     
     useEffect(() => {
         dispatch(resetComments());
         dispatch(loadComments(postLink));
     }, [dispatch, postLink]);
     
     const comments = useSelector(selectComments);
     const isVisibleArray = comments.map(() => false)  // testing passing isVisible via props
     const isVisibleObj = Object.assign({}, isVisibleArray)  // converts array into object for easier manipulation in state variable

     if (isLoading){
         return (
            <div className="Comments-List">
                <h1 className="loading">Loading...</h1>
            </div>
         );
     }
 
     if (hasError){
         return (
            <div className="Comments-List">
                <h1 className="error">Ooops!  Something went wrong.  Reload and try again.</h1>
            </div>
         );
     }
 
     return (
         <Comment comments={comments} isVisible={isVisibleObj}/>  // need to pass isVisible props also recursively
     )
 

} 



export default CommentList;