import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTitle, getAuthor, getSubreddit, getImageURL, getVideoURL, getNumComments, getScore, getDate } from '../../utils';

// use createAsyncThunk to fetch reddit posts list asynchronously with action creator and reducer

export const loadPosts = createAsyncThunk('postList/loadPosts', async (url, thunkAPI) => {
    const response = await fetch(url);
    const data = await response.json();
    const jsonArray = data.data.children;
    
    // Extracting relevant data elements from raw post data
    const formattedPosts = jsonArray.map((data) => {
        
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

export const { addPost, deletePost, resetPosts } = postListSlice.actions;
export default postListSlice.reducer;
