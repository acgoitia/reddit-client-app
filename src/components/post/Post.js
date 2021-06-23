import React from 'react';
import './post.css';
import { decodeEntities } from '../../utils';



function Post (props) {
    
    const { posts } = props;

    return (
        <div className="Post-List">
            {
                posts.map(post => {
                   
                    // time-stamp conversion to elapsed time
                    const unixDateMs = post.datePosted * 1000;
                    const now = Date.now();
                    const timeDiffMs = now - unixDateMs;
                    const hrs = timeDiffMs / 1000 / 3600;
                    const days = hrs / 24;
                    const months = days / 30.44;
                    const years = days / 365.24;
                    let timeElapsed;
                    if (hrs < 24) {
                        timeElapsed = `${Math.floor(hrs)} hours ago`;
                    } 
                    else if (days < 30.44) {
                        timeElapsed = `${Math.floor(days)} days ago`;
                    }
                    else if (months < 12) {
                        timeElapsed = `${Math.floor(months)} months ago`;
                    }
                    else {
                        timeElapsed = `${Math.floor(years)} years ago`;
                    }
                    
                    // Reformating score and comment #s
                    let formattedScore;
                    let formattedComments;

                    if ( post.score > 999) {
                        const scoreK = Math.round(post.score / 100) / 10;
                        formattedScore = `${scoreK}k`;
                    } else {
                        formattedScore = `${post.score}`;
                    }

                    if ( post.numComments > 999) {
                        const commentsK = Math.round(post.numComments /100) / 10;
                        formattedComments = `${commentsK}k comments`;
                    } else {
                        formattedComments = `${post.numComments} comments`;
                    }
                    // Getting HTML string for body
                    const htmlBody = decodeEntities(post.htmlBody);
                    const videoHtml = decodeEntities(post.videoHtml);
                    

                    return (
                        <div className="Post">
                            <div className="post-header">
                                <p>{post.subreddit}</p>
                                <p>{`Posted by u/${post.author}`}</p>
                                <p>{timeElapsed}</p>
                            </div>
                            <div className="post-body">
                                <h1>{post.title}</h1>
                                { post.htmlBody && <div dangerouslySetInnerHTML={{__html: htmlBody}}></div> }
                                { post.imageURL && <img src={post.imageURL} alt="post" /> }
                                { post.videoURL && <video controls autoPlay muted loop ><source src={post.videoURL} type="video/mp4" /></video> }
                                { post.videoHtml && <div dangerouslySetInnerHTML={{__html: videoHtml}}></div> }
                            </div>
                            <div className="post-footer">
                                <div className="score">
                                    <i className="fas fa-arrow-up"></i>
                                    <p>{formattedScore}</p>
                                    <i className="fas fa-arrow-down"></i>
                                </div>
                                <div className="comments">
                                    <i className="fas fa-comment-alt"></i>
                                    <p>{formattedComments}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Post;