// Helper functions - from post List: 

export function getId (post) {
    return post.data.id;   // original return post.data.title;
}
export function getTitle (post) {
    return post.data.title;   // original return post.data.title;
}
export function getAuthor (post) {
    return post.data.author;
}
export function getSubreddit (post) {
    return post.data.subreddit_name_prefixed;
}
export function getImageURL (post) {
    if (post.data.url.search(/.jpg/) !== -1  || post.data.url.search(/.png/) !== -1 ){  // see if it links to image
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
export function getVideoHtml (post) {
    if (post.data.secure_media) {
        if(post.data.secure_media.oembed){
            return post.data.secure_media.oembed.html;
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
    return post.data.created_utc;
}
export function getHtml (post) {
    return post.data.selftext_html;
}
export function getLink (post) {
    return post.data.permalink;    
}

// HTML Entities decoder

export var decodeEntities = (function() {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');
  
    function decodeHTMLEntities (str) {
      if(str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
  
      return str;
    }
  
    return decodeHTMLEntities;
  })();


// Date Posted helper function

// time-stamp conversion to elapsed time
export function getElapsedTime (timeStamp) {
    const unixDateMs = timeStamp * 1000;
    const now = Date.now();
    const timeDiffMs = now - unixDateMs;
    const min = timeDiffMs / 1000 / 60;
    const hrs = timeDiffMs / 1000 / 3600;
    const days = hrs / 24;
    const months = days / 30.44;
    const years = days / 365.24;
    
    if (min < 60) {
        return `${Math.floor(min)} minutes ago`;
    }
    if (hrs < 24) {
        return `${Math.floor(hrs)} hours ago`;
    } 
    if (days < 30.44) {
        return `${Math.floor(days)} days ago`;
    }
    if (months < 12) {
        return `${Math.floor(months)} months ago`;
    }
    return `${Math.floor(years)} years ago`;

}

// Helper function to convert subscriber units
export function getSubscribers (number) {
     if (number < 1000) {
        return `${number}`;
     }
     if (number < 1000000) {
        return `${Math.floor(number/1000)}K`;
     }
    return `${Math.floor(number/100000)/10}M`;
}

// Helper to turn comment data into simpliefied object
export function getCommentData (commentArray) {
    const commentArrayFiltered = commentArray.filter(comment => comment.kind !== "more")  // remove "more" array with info for next posts/comments
    const filteredComments = commentArrayFiltered.map(comment => {
            
    const content = comment.data.body;
    const author = comment.data.author;
    var replies = '';
    if (comment.data.replies){
        replies = comment.data.replies.data.children;  
    } 
    const date = comment.data.created_utc;
    const link = comment.data.permalink;  // ending of link, starts with r/...
    
    const commentObj = {
        content: content,
        author: author,
        replies: replies,
        date: date,
        link: link
    }
    
        return commentObj;
    })

    return filteredComments;

}

// Helper to turn comment data into simpliefied object

export function getSubRedditData (array) {

    return array.map((el) => {
        
        return  {
            title: el.data.display_name_prefixed,
            description: el.data.description_html,  // this or .description without html tags
            id: el.data.id,
            subscribers: el.data.subscribers,
            display_name: el.data.display_name
        }
    })

}

