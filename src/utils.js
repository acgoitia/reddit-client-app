// get data from single post page

export const redditPost = async (url) => {

    //from array list
    const jsonArray = await redditList(url);
    const data = jsonArray[3];

    // directly from post
    //const response = await fetch(url);
    //const data = await response.json();
    
    //Extract relevant fields from JSON data
    const title = getTitle(data);
    const author = getAuthor(data);
    const subreddit = getSubreddit(data);
    const imageURL = getImageURL(data);
    const videoURL = getVideoURL(data);
    const numComments = getNumComments(data);
    const score = getScore(data);
    const datePosted = getDate(data);
    // Create post object
    const post = {
        title: title,
        author: author,
        subreddit:subreddit,
        imageURL: imageURL,
        videoURL: videoURL,
        numComments: numComments,
        score: score,
        datePosted: datePosted
    }
    return post;

};

// get data from listing page

export const redditList = async (url) => {

    const response = await fetch(url);
    const data = await response.json();

    const jsonArray = data.data.children;
    return jsonArray;
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

// Helper functions - from post List: 

function getTitle (post) {
    return post.data.title;
}
function getAuthor (post) {
    return post.data.author;
}
function getSubreddit (post) {
    return post.data.subreddit_name_prefixed;
}
function getImageURL (post) {
    if (post.data.url.search(/.jpg/) !== -1){  // see if it links to image
        return post.data.url;    
    }
    return '';
}
function getVideoURL (post) {
    if (post.data.secure_media) {
        return post.data.secure_media.reddit_video.fallback_url;
    }
    return '';
}
function getNumComments (post) {
    return post.data.num_comments;
}
function getScore (post) {
    return post.data.score;
}
function getDate (post) {
    return post.data.created;
}