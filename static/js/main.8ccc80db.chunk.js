(this["webpackJsonpreddit-client"]=this["webpackJsonpreddit-client"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(18),a=n.n(r),s=(n(28),n(13)),i=n(15),o=(n(29),n(5)),d=n(4),u=n(10),l=n.n(u),j=n(14),b=n(7);function m(e){return e.data.id}function h(e){return e.data.title}function f(e){return e.data.author}function p(e){return e.data.subreddit_name_prefixed}function O(e){return-1!==e.data.url.search(/.jpg/)||-1!==e.data.url.search(/.png/)?e.data.url:""}function x(e){return e.data.secure_media&&e.data.secure_media.reddit_video?e.data.secure_media.reddit_video.fallback_url:""}function v(e){return e.data.secure_media&&e.data.secure_media.oembed?e.data.secure_media.oembed.html:""}function g(e){return e.data.num_comments}function L(e){return e.data.score}function w(e){return e.data.created_utc}function N(e){return e.data.selftext_html}function y(e){return e.data.permalink}var _,k=function(){var e=document.createElement("div");return function(t){return t&&"string"===typeof t&&(t=(t=t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),e.innerHTML=t,t=e.textContent,e.textContent=""),t}}();function S(e){var t=1e3*e,n=Date.now()-t,c=n/1e3/60,r=n/1e3/3600,a=r/24,s=a/30.44,i=a/365.24;return c<60?"".concat(Math.floor(c)," minutes ago"):r<24?"".concat(Math.floor(r)," hours ago"):a<30.44?"".concat(Math.floor(a)," days ago"):s<12?"".concat(Math.floor(s)," months ago"):"".concat(Math.floor(i)," years ago")}function E(e){return e<1e3?"".concat(e):e<1e6?"".concat(Math.floor(e/1e3),"K"):"".concat(Math.floor(e/1e5)/10,"M")}function R(e){return e.filter((function(e){return"more"!==e.kind})).map((function(e){var t=e.data.body,n=e.data.author,c="";return e.data.replies&&(c=e.data.replies.data.children),{content:t,author:n,replies:c,date:e.data.created_utc,link:e.data.permalink}}))}var P=Object(b.b)("postList/loadPosts",function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,a=r.data.children,s=a.map((function(e){return{id:m(e),title:h(e),author:f(e),subreddit:p(e),imageURL:O(e),videoURL:x(e),videoHtml:v(e),numComments:g(e),score:L(e),datePosted:w(e),htmlBody:N(e),link:y(e)}})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),C={name:"postList",initialState:{posts:[],isLoading:!1,hasError:!1},reducers:{addPost:function(e,t){e.posts.push(t.payload)},deletePost:function(e,t){return e.posts.filter((function(e){return e!==t.payload}))},resetPosts:function(e){e.posts=[]},selectPost:function(e,t){var n=e.posts.filter((function(e){return e.id===t.payload}));e.posts=n}},extraReducers:(_={},Object(d.a)(_,P.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(d.a)(_,P.fulfilled,(function(e,t){e.isLoading=!1,e.hasError=!1,e.posts=t.payload})),Object(d.a)(_,P.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),_)},M=Object(b.c)(C),H=function(e){return e.postList.posts},U=M.actions,B=(U.addPost,U.deletePost,U.resetPosts),V=(U.selectPost,M.reducer),I=(n(34),n(12)),T=n(0);var q=function(e){var t=e.posts;return Object(T.jsx)("div",{className:"Post-List-sub",children:t.map((function(e){var t,n,c=S(e.datePosted);if(e.score>999){var r=Math.round(e.score/100)/10;t="".concat(r,"k")}else t="".concat(e.score);if(e.numComments>999){var a=Math.round(e.numComments/100)/10;n="".concat(a,"k comments")}else n="".concat(e.numComments," comments");var s=k(e.htmlBody),i=k(e.videoHtml);return Object(T.jsxs)("div",{className:"Post",children:[Object(T.jsxs)("div",{className:"post-header",children:[Object(T.jsx)(I.b,{to:"/".concat(e.subreddit),children:Object(T.jsx)("p",{className:"subreddit",children:e.subreddit})}),Object(T.jsx)("p",{children:"Posted by u/".concat(e.author)}),Object(T.jsx)("p",{children:c})]}),Object(T.jsxs)("div",{className:"post-body",children:[Object(T.jsx)("h1",{children:e.title}),e.htmlBody&&Object(T.jsx)("div",{dangerouslySetInnerHTML:{__html:s}}),e.imageURL&&Object(T.jsx)("img",{src:e.imageURL,alt:"post"}),e.videoURL&&Object(T.jsx)("video",{controls:!0,autoPlay:!0,muted:!0,loop:!0,children:Object(T.jsx)("source",{src:e.videoURL,type:"video/mp4"})}),e.videoHtml&&Object(T.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})]}),Object(T.jsxs)("div",{className:"post-footer",children:[Object(T.jsxs)("div",{className:"score",children:[Object(T.jsx)("i",{className:"fas fa-arrow-up"}),Object(T.jsx)("p",{children:t}),Object(T.jsx)("i",{className:"fas fa-arrow-down"})]}),Object(T.jsx)(I.b,{to:"/".concat(e.id),children:Object(T.jsxs)("div",{className:"comments",children:[Object(T.jsx)("i",{className:"fas fa-comment-alt"}),Object(T.jsx)("p",{children:n})]})})]})]})}))})};n(38);var D=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.postList})),r=n.isLoading,a=n.hasError,s=e.link,i=e.match,d=e.endpoint;Object(c.useEffect)((function(){t(B()),t(P(s))}),[t,s]);var u=Object(o.c)(H);return r?Object(T.jsx)("div",{className:"Post-List",children:Object(T.jsx)("h1",{className:"loading",children:"Loading..."})}):a?Object(T.jsx)("div",{className:"Post-List",children:Object(T.jsx)("h1",{className:"error",children:"Ooops!  Something went wrong and we couldn't fetch data from server.  Reload and try again."})}):Object(T.jsxs)("div",{className:"Post-List",children:[i&&"/"===i.path&&Object(T.jsx)("h2",{children:"Popular Posts"}),i&&i.path==="/search/".concat(d)&&Object(T.jsx)("h2",{children:"Search results for: ".concat(d)}),Object(T.jsx)(q,{posts:u})]})};n(39);var J,W=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],s=e.handleSubmit;return Object(c.useEffect)((function(){a("")}),[s]),Object(T.jsxs)("header",{children:[Object(T.jsx)(I.b,{to:"/",children:Object(T.jsx)("p",{children:"Home"})}),Object(T.jsx)("form",{onSubmit:s,children:Object(T.jsx)("input",{type:"text",placeholder:"search...",value:r,onChange:function(e){var t=e.target;a(t.value)}})})]})},Y=Object(b.b)("sidebarList/loadSubReddits",function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,a=r.data.children,e.abrupt("return",a.map((function(e){return{title:e.data.display_name_prefixed,description:e.data.description_html,id:e.data.id,subscribers:e.data.subscribers,display_name:e.data.display_name}})));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),z={name:"sidebarList",initialState:{subReddits:[],isLoading:!1,hasError:!1},reducers:{resetSubReddits:function(e,t){e.subReddits=[]}},extraReducers:(J={},Object(d.a)(J,Y.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(d.a)(J,Y.fulfilled,(function(e,t){e.isLoading=!1,e.hasError=!1,e.subReddits=t.payload})),Object(d.a)(J,Y.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),J)},A=Object(b.c)(z),K=function(e){return e.sidebarList.subReddits},Q=A.actions.resetSubReddits,X=A.reducer;n(40);var $,F=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.sidebarList})),r=n.isLoading,a=n.hasError;Object(c.useEffect)((function(){t(Q()),t(Y("https://www.reddit.com/subreddits/.json"))}),[t]);var s=Object(o.c)(K);return r?Object(T.jsxs)("div",{className:"Sidebar-List",children:[Object(T.jsx)("h2",{children:"Popular Subreddits"}),Object(T.jsx)("h2",{className:"loading",children:"..."})]}):a?Object(T.jsxs)("div",{className:"Sidebar-List",children:[Object(T.jsx)("h2",{children:"Popular Subreddits"}),Object(T.jsx)("h2",{className:"error",children:"Ooops!  Something went wrong.  Reload and try again."})]}):Object(T.jsxs)("div",{className:"Sidebar-List",children:[Object(T.jsx)("h2",{children:"Popular Subreddits"}),s.map((function(e){return Object(T.jsx)(I.b,{to:"/r/".concat(e.display_name),children:Object(T.jsxs)("div",{className:"sub-reddit",children:[Object(T.jsx)("h3",{children:e.title}),Object(T.jsx)("h4",{children:"".concat(E(e.subscribers)," subscribers")})]})})}))]})},G=Object(b.b)("subreddit/loadSubReddit",function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.abrupt("return",{name:r.data.display_name_prefixed,description:r.data.public_description,members:r.data.subscribers,online:r.data.active_user_count,icon:r.data.icon_img,banner:r.data.banner_img,color:r.data.banner_background_color,display_name:r.data.display_name});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Z={name:"subreddit",initialState:{subReddit:{},isLoading:!1,hasError:!1},reducers:{deleteSubreddit:function(e,t){e.subReddit={}}},extraReducers:($={},Object(d.a)($,G.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(d.a)($,G.fulfilled,(function(e,t){e.isLoading=!1,e.hasError=!1,e.subReddit=t.payload})),Object(d.a)($,G.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),$)},ee=Object(b.c)(Z),te=function(e){return e.subreddit.subReddit},ne=ee.actions.deleteSubreddit,ce=ee.reducer;n(41);var re,ae=function(e){var t=e.match,n=Object(o.b)(),r=Object(o.c)((function(e){return e.subreddit})),a=r.isLoading,s=r.hasError,i="https://www.reddit.com/r/".concat(t.params.subreddit,"/about.json");Object(c.useEffect)((function(){n(ne()),n(G(i))}),[n,i]);var d=Object(o.c)(te),u=d.name,l=d.description,j=d.members,b=d.online,m=d.icon,h=d.banner,f="https://www.reddit.com/".concat(u,"/.json");return a?Object(T.jsx)("div",{className:"subreddit-page",children:Object(T.jsx)("h1",{children:"Loading..."})}):s?Object(T.jsx)("div",{className:"subreddit-page",children:Object(T.jsx)("h1",{children:"Ooops!  Something went wrong.  Reload and try again."})}):Object(T.jsxs)("div",{className:"subreddit-page",children:[Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(h||"https://b.thumbs.redditmedia.com/VQ9Hvimc-54M7j6m2Ye1Bpix_iiaXh5ulYhUwkcyqqA.png",")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),Object(T.jsxs)("div",{className:"subreddit-title",children:[Object(T.jsx)("img",{src:m||"https://i.redd.it/snoovatar/snoovatars/8658e16c-55fa-486f-b7c7-00726de2e742.png",alt:"icon"}),Object(T.jsx)("h3",{children:u}),Object(T.jsx)("p",{children:l})]}),Object(T.jsxs)("div",{className:"subreddit-members",children:[Object(T.jsx)("p",{className:"members",children:"".concat(E(j)," Members")}),Object(T.jsx)("p",{className:"online",children:"".concat(E(b)," Online")})]})]}),Object(T.jsx)(D,{link:f})]})},se=Object(b.b)("commentList/loadComments",function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,a=r[1].data.children,e.abrupt("return",R(a));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ie={name:"commentList",initialState:{comments:[],isLoading:!1,hasError:!1},reducers:{resetComments:function(e,t){e.comments=[]}},extraReducers:(re={},Object(d.a)(re,se.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(d.a)(re,se.fulfilled,(function(e,t){e.isLoading=!1,e.hasError=!1,e.comments=t.payload})),Object(d.a)(re,se.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),re)},oe=Object(b.c)(ie),de=function(e){return e.commentList.comments},ue=oe.actions.resetComments,le=oe.reducer;n(42);var je=function e(t){var n=t.comments,r=t.isVisible,a=Object(c.useState)(r),o=Object(i.a)(a,2),u=o[0],l=o[1],j=function(e){var t=e.target,n=u[t.value];l((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(d.a)({},t.value,!n))}))};return Object(T.jsx)("div",{className:"Comments-List",children:n.map((function(t,n){var c=S(t.date),r=t.replies?R(t.replies):[];return Object(T.jsxs)("div",{className:"Comment",children:[Object(T.jsxs)("div",{className:"comment-header",children:[Object(T.jsx)("p",{children:"Comment by ".concat(t.author)}),Object(T.jsx)("p",{children:c})]}),Object(T.jsx)("div",{className:"comment-body",children:Object(T.jsx)("p",{children:t.content})}),Object(T.jsx)("div",{className:"comment-footer",children:t.replies&&"more"!==t.replies[0].kind&&Object(T.jsx)("button",{onClick:j,value:n,children:"view replies"})}),u[n]&&t.replies&&Object(T.jsx)("div",{className:"replies",children:Object(T.jsx)(e,{comments:r,isVisible:Object.assign({},t.replies.map((function(){return!1})))})})]})}))})};var be=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.commentList})),r=n.isLoading,a=n.hasError,s=e.postLink;Object(c.useEffect)((function(){t(ue()),t(se(s))}),[t,s]);var i=Object(o.c)(de),d=i.map((function(){return!1})),u=Object.assign({},d);return r?Object(T.jsx)("div",{className:"Comments-List",children:Object(T.jsx)("h1",{className:"loading",children:"Loading..."})}):a?Object(T.jsx)("div",{className:"Comments-List",children:Object(T.jsx)("h1",{className:"error",children:"Ooops!  Something went wrong.  Reload and try again."})}):Object(T.jsx)(je,{comments:i,isVisible:u})};n(43);var me=function(e){var t=e.match,n=Object(o.c)(H).filter((function(e){return e.id===t.params.id})),c="https://www.reddit.com".concat(n[0].link,".json");return Object(T.jsxs)("div",{className:"Post-with-comments",children:[Object(T.jsx)("div",{className:"fixed-post",id:"exception",children:Object(T.jsx)(q,{posts:n})}),Object(T.jsx)(be,{postLink:c})]})},he=n(3);function fe(){var e=Object(he.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var pe=function(){var e=Object(he.f)(),t=Object(c.useState)("https://www.reddit.com/.json"),n=Object(i.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),d=Object(i.a)(o,2),u=d[0],l=d[1];return Object(T.jsxs)("div",{children:[Object(T.jsx)(fe,{}),Object(T.jsx)(W,{handleSubmit:function(t){t.preventDefault();var n=t.target[0].defaultValue;l(n),a("https://www.reddit.com/search/.json?q=".concat(n)),e.push("/search/".concat(n))}}),Object(T.jsxs)("main",{children:[Object(T.jsx)(F,{}),Object(T.jsxs)(he.c,{children:[Object(T.jsx)(he.a,{exact:!0,path:"/",render:function(e){return Object(T.jsx)(D,Object(s.a)(Object(s.a)({},e),{},{link:"https://www.reddit.com/.json"}))}}),Object(T.jsx)(he.a,{exact:!0,path:"/search/".concat(u),render:function(e){return Object(T.jsx)(D,Object(s.a)(Object(s.a)({},e),{},{link:r,endpoint:u}))}}),Object(T.jsx)(he.a,{exact:!0,path:"/:id",component:me}),Object(T.jsx)(he.a,{exact:!0,path:"/r/:subreddit",component:ae}),Object(T.jsx)(he.a,{exact:!0,path:"/results",render:function(e){return Object(T.jsx)(D,Object(s.a)(Object(s.a)({},e),{},{link:r}))}})]})]})]})},Oe=Object(b.a)({reducer:{postList:V,commentList:le,sidebarList:X,subreddit:ce}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(T.jsx)(o.a,{store:Oe,children:Object(T.jsx)(I.a,{basename:"/reddit-client-app",children:Object(T.jsx)(pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.8ccc80db.chunk.js.map