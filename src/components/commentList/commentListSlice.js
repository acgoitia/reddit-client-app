import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCommentData } from '../../utils';


// Async action creator
export const loadComments = createAsyncThunk('commentList/loadComments', async (postUrl, thunkAPI) => {
    const response = await fetch(postUrl);
    const jsonData = await response.json();
    
    const commentsArray = jsonData[1].data.children; // array of comments
    
    return getCommentData(commentsArray);

})


// create slice
const options = {
    name: 'commentList',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        resetComments: (state, action) => {
            state.comments = [];
        }
    },
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload;
        },
        [loadComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError= true;
        }
    }
};

const commentListSlice = createSlice(options);

// Define selectors
export const selectComments = (state) => state.commentList.comments;

// Export actions 
export const { resetComments } = commentListSlice.actions;
export default commentListSlice.reducer;