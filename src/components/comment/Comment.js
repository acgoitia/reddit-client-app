import React, { useState } from 'react';
import { getCommentData, getElapsedTime } from '../../utils';
import './comment.css';


function Comment (props) {

    const { comments, isVisible } = props;
    const [isVisibleState, setIsVisibleState] = useState(isVisible);  //use state array, converted into object, to keep track of showing/hiding replies

    const handleClickEvent = ({target}) => {
        const tmp = isVisibleState[target.value];
        setIsVisibleState((prev) => ({...prev, [target.value]: !tmp}))        // used object in order to be able to use spread notation and only update relevant visible state element
    }

    return (
        <div className="Comments-List">
            {
                
                comments.map((comment, index) => {
                    // time-stamp conversion to elapsed time
                    const timeElapsed = getElapsedTime(comment.date);
                    
                    // Get array of comments embedded in replies key to render nested replies for each comment
                    const repliesArray = comment.replies ? getCommentData(comment.replies) : []; 

                    return (
                        <div className="Comment">
                            <div className="comment-header">
                                <p>{`Comment by ${comment.author}`}</p>
                                <p>{timeElapsed}</p>
                            </div>
                            <div className="comment-body">
                                <p>{comment.content}</p>
                            </div>
                            <div className="comment-footer">
                                {
                                    comment.replies && ((comment.replies[0].kind !== "more") && (<button onClick={handleClickEvent} value={index}  // click event sends relevant index as value to the event handler, so we can only modify the relevant element state value;
                                    >view replies</button>)) 
                                }
                            </div>
                            {   //Only render nested comments if relplies exist & user has toggled state.  Create isVisible object directly with new replies array.
                                isVisibleState[index] && (comment.replies &&            
                                (<div className="replies">
                                    <Comment comments={repliesArray} isVisible={Object.assign({}, comment.replies.map(() => false))}/> 
                                </div>))
                            }
                        </div>
                    ) 
                })
            }
        </div>
    );
}

export default Comment;



        