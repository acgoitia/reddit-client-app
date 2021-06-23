import React from 'react';
import { getElapsedTime } from '../../utils';
import './comment.css';


function Comment (props) {

    const { comments } = props;

    return (
        <div className="Comments-List">
            {
                comments.map(comment => {
                   // time-stamp conversion to elapsed time
                    const timeElapsed = getElapsedTime(comment.date)
                    
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
                                <div className="replies comments">
                                    <i className="fas fa-comment-alt"></i>
                                    <p>view replies</p>
                                </div>
                            </div>
                        </div>
                    ) 
                })
            }
        </div>
    );
}

export default Comment;



        