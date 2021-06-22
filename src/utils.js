
export const redditJson = async (url) => {

    const response = await fetch(url);
    const data = await response.json();
    
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


function getTitle (post) {
    return post[0].data.children[0].data.title;
}
function getAuthor (post) {
    return post[0].data.children[0].data.author;
}
function getSubreddit (post) {
    return post[0].data.children[0].data.subreddit_name_prefixed;
}
function getImageURL (post) {
    return post[0].data.children[0].data.url;
}
function getVideoURL (post) {
    return post[0].data.children[0].data.secure_media.reddit_video.fallback_url;
}
function getNumComments (post) {
    return post[0].data.children[0].data.num_comments;
}
function getScore (post) {
    return post[0].data.children[0].data.score;
}
function getDate (post) {
    return post[0].data.children[0].data.created;
}