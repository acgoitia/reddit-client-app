// Helper functions - from post List: 

export function getTitle (post) {
    return post.data.title;
}
export function getAuthor (post) {
    return post.data.author;
}
export function getSubreddit (post) {
    return post.data.subreddit_name_prefixed;
}
export function getImageURL (post) {
    if (post.data.url.search(/.jpg/) !== -1){  // see if it links to image
        return post.data.url;    
    }
    return '';
}
export function getVideoURL (post) {
    if (post.data.secure_media) {
        if(post.data.secure_media.reddit_video){
            return post.data.secure_media.reddit_video.fallback_url;
        }
    }
    return '';
}
export function getNumComments (post) {
    return post.data.num_comments;
}
export function getScore (post) {
    return post.data.score;
}
export function getDate (post) {
    return post.data.created;
}

// Helper functions - from post: 

// function getTitle (post) {
//     return post[0].data.children[0].data.title;
// }
// function getAuthor (post) {
//     return post[0].data.children[0].data.author;
// }
// function getSubreddit (post) {
//     return post[0].data.children[0].data.subreddit_name_prefixed;
// }
// function getImageURL (post) {
//     return post[0].data.children[0].data.url;
// }
// function getVideoURL (post) {
//     return post[0].data.children[0].data.secure_media.reddit_video.fallback_url;
// }
// function getNumComments (post) {
//     return post[0].data.children[0].data.num_comments;
// }
// function getScore (post) {
//     return post[0].data.children[0].data.score;
// }
// function getDate (post) {
//     return post[0].data.children[0].data.created;
// }
