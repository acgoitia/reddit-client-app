import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getId, getTitle, getAuthor, getSubreddit, getImageURL, getVideoURL, getNumComments, getScore, getDate, getHtml, getVideoHtml, getLink } from '../../utils';

// use createAsyncThunk to fetch reddit posts list asynchronously with action creator and reducer

export const loadPosts = createAsyncThunk('postList/loadPosts', async (url, thunkAPI) => {
    const response = await fetch(url);
    const data = await response.json();
    const jsonArray = data.data.children;
    
    // Extracting relevant data elements from raw post data
    const formattedPosts = jsonArray.map((data) => {
        
        //Extract relevant fields from JSON data
        const id = getId(data);
        const title = getTitle(data);
        const author = getAuthor(data);
        const subreddit = getSubreddit(data);
        const imageURL = getImageURL(data);
        const videoURL = getVideoURL(data);
        const videoHtml = getVideoHtml(data);
        const numComments = getNumComments(data);
        const score = getScore(data);
        const datePosted = getDate(data);
        const htmlBody = getHtml(data);
        const link = getLink(data);
        
        // Create post object
        const post = {
            id: id,
            title: title,
            author: author,
            subreddit:subreddit,
            imageURL: imageURL,
            videoURL: videoURL,
            videoHtml: videoHtml,
            numComments: numComments,
            score: score,
            datePosted: datePosted,
            htmlBody: htmlBody,
            link: link
        }
        return post;
    });

    return formattedPosts;
    
});



// create slice

const options = {
    name: 'postList',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        deletePost: (state, action) => {
            return state.posts.filter( post => post !== action.payload);
        },
        resetPosts: (state) => {
            state.posts = []
        },
        selectPost: (state, action) => {
            const selectedPost = state.posts.filter(post => post.id === action.payload)
            state.posts = selectedPost;
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
}

const postListSlice = createSlice(options);

// Define selectors

export const selectPosts = (state) => state.postList.posts;  // return array of posts


// export action creators and reducers

export const { addPost, deletePost, resetPosts, selectPost } = postListSlice.actions;
export default postListSlice.reducer;
