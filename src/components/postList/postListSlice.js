import { createSlice } from '@reduxjs/toolkit';


// create slice

const options = {
    name: 'postList',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        deletePost: (state, action) => {
            return state.filter( post => post !== action.payload);
        },
        resetPosts: (state) => [],
        loadPosts: (state, action) => action.payload
    }
}

const postListSlice = createSlice(options);

// Define selectors

export const selectPosts = (state) => state.postList;  // return array of posts


// export action creators and reducers

export const { loadPosts, addPost, deletePost, resetPosts } = postListSlice.actions;
export default postListSlice.reducer;
