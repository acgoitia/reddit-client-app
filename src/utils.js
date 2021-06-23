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
    if (post.data.url.search(/.jpg/) === -1  || post.data.url.search(/.png/) === -1 ){  // see if it links to image
        return post.data.url;    
    }
    return '';
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


/*
&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;h3&gt;Final, ICC World Test Championship at Southampton&lt;/h3&gt;

&lt;p&gt;&lt;a href="http://www.espncricinfo.com/series/19430/game/1249875/"&gt;Cricinfo&lt;/a&gt; | &lt;a href="https://www.reddit-stream.com/r/Cricket/comments/o68fs1/match_thread_final_india_vs_new_zealand_day_6/"&gt;Reddit-Stream&lt;/a&gt; | ☁️ ☁️ ☁️ 🌥 🌥 &lt;/p&gt;

&lt;table&gt;&lt;thead&gt;
&lt;tr&gt;
&lt;th align="left"&gt;Innings&lt;/th&gt;
&lt;th align="left"&gt;Score&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;&lt;tbody&gt;
&lt;tr&gt;
&lt;td align="left"&gt;India&lt;/td&gt;
&lt;td align="left"&gt;217/10 (Ov 92.1)&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="left"&gt;New Zealand&lt;/td&gt;
&lt;td align="left"&gt;249/10 (Ov 99.2)&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="left"&gt;India&lt;/td&gt;
&lt;td align="left"&gt;170/10 (Ov 73)&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="left"&gt;New Zealand&lt;/td&gt;
&lt;td align="left"&gt;46/2 (Ov 22)&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;&lt;/table&gt;

&lt;table&gt;&lt;thead&gt;
&lt;tr&gt;
&lt;th align="left"&gt;Batsman&lt;/th&gt;
&lt;th align="left"&gt;Runs&lt;/th&gt;
&lt;th align="left"&gt;Balls&lt;/th&gt;
&lt;th align="left"&gt;SR&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;&lt;tbody&gt;
&lt;tr&gt;
&lt;td align="left"&gt;Kane Williamson*&lt;/td&gt;
&lt;td align="left"&gt;8&lt;/td&gt;
&lt;td align="left"&gt;28&lt;/td&gt;
&lt;td align="left"&gt;28.57&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="left"&gt;Ross Taylor&lt;/td&gt;
&lt;td align="left"&gt;0&lt;/td&gt;
&lt;td align="left"&gt;16&lt;/td&gt;
&lt;td align="left"&gt;0.0&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;&lt;/table&gt;

&lt;table&gt;&lt;thead&gt;
&lt;tr&gt;
&lt;th align="left"&gt;Bowler&lt;/th&gt;
&lt;th align="left"&gt;Overs&lt;/th&gt;
&lt;th align="left"&gt;Runs&lt;/th&gt;
&lt;th align="left"&gt;Wickets&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;&lt;tbody&gt;
&lt;tr&gt;
&lt;td align="left"&gt;Ravichandran Ashwin&lt;/td&gt;
&lt;td align="left"&gt;7&lt;/td&gt;
&lt;td align="left"&gt;5&lt;/td&gt;
&lt;td align="left"&gt;2&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="left"&gt;Mohammed Shami&lt;/td&gt;
&lt;td align="left"&gt;7&lt;/td&gt;
&lt;td align="left"&gt;9&lt;/td&gt;
&lt;td align="left"&gt;0&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;&lt;/table&gt;

&lt;pre&gt;&lt;code&gt;Recent : . .  |  . . . . . .  |  . . . . . .  |  . . . . . .  |  
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;Day 6 - Session 3: New Zealand need 93 runs. CRR: 2.09&lt;/p&gt;

&lt;p&gt;&lt;a href="https://www.reddit.com/message/compose/?to=poochi&amp;amp;subject=Bot%20Feedback"&gt;&lt;sup&gt;Send feedback&lt;/sup&gt;&lt;/a&gt; &lt;sup&gt;|&lt;/sup&gt; &lt;a href="https://www.reddit.com/r/Cricket/wiki/bot_schedule"&gt;&lt;sup&gt;Schedule&lt;/sup&gt;&lt;/a&gt; &lt;sup&gt;|&lt;/sup&gt; &lt;a href="https://www.reddit.com/r/Cricket/wiki/bot_help"&gt;&lt;sup&gt;Stat Help&lt;/sup&gt;&lt;/a&gt;&lt;/p&gt;

&lt;p&gt;&lt;sup&gt;Please don&amp;#39;t post illegal streaming links in match threads&lt;/sup&gt;&lt;/p&gt;
&lt;/div&gt;&lt;!-- SC_ON --&gt;
*/


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
