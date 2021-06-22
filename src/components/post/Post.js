import React from 'react';
import './post.css'



function Post (props) {
    
    const { posts } = props;

    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <div className="Post">
                            <div className="post-header">
                                <p>{post.subreddit}</p>
                                <p>{`Posted by ${post.author}`}</p>
                                <p>{post.datePosted}</p>
                            </div>
                            <div className="post-body">
                                <h1>{post.title}</h1>
                                { post.imageURL && <img src={post.imageURL} alt="post" /> }
                                { post.videoURL && <video controls autoPlay muted loop ><source src={post.videoURL} type="video/mp4" /></video> }
                            </div>
                            <div className="post-footer">
                                <p>{post.score}</p>
                                <p>{post.numComments}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Post;
/*
{
    title: 'You think you could do this?',
    author: 'Zzazy1',
    subreddit:'r/nextfuckinglevel',
    imageURL:'',
    videoURL: 'https://v.redd.it/t97k9kz473671/DASH_720.mp4?source=fallback',
    numComments: 2223,
    score: 50565,
    datePosted: 1624078199 
}
*/