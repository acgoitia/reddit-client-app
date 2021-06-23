// Helper functions - from post List: 

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
