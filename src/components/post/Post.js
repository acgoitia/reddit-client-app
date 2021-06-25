import React from 'react';
import './post.css';
import { decodeEntities, getElapsedTime } from '../../utils';
import { Link } from 'react-router-dom';


function Post (props) {
    //const dispatch = useDispatch
    const { posts } = props;

    // Link makes sure state changes and also changes path which will be hadled by switch
    // function handleCommentClick ({target}) {
    //     dispatch(selectPost(target.id))
    // }

    return (
        <div className="Post-List-sub">
            {
                posts.map(post => {
                   
                    // time-stamp conversion to elapsed time
                    const timeElapsed = getElapsedTime(post.datePosted)
                    
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
                                <Link to={`/${post.subreddit}`}>
                                    <p className="subreddit">{post.subreddit}</p>
                                </Link>
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
                                <Link to={`/${post.id}`} >
                                    <div className="comments" >
                                        <i className="fas fa-comment-alt"></i>
                                        <p>{formattedComments}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Post;

//onClick={handleCommentClick} id={post.id}