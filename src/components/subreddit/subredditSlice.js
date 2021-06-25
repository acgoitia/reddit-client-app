import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Async action creator
export const loadSubReddit = createAsyncThunk('subreddit/loadSubReddit', async (subRedditUrl, thunkAPI) => {
    const response = await fetch(subRedditUrl);
    const jsonData = await response.json();
    
    return {
        name: jsonData.data.display_name_prefixed,
        description:jsonData.data.public_description,
        members:jsonData.data.subscribers,
        online:jsonData.data.active_user_count,
        icon: jsonData.data.icon_img,
        banner: jsonData.data.banner_img,
        color: jsonData.data.banner_background_color
    };
    
})


// create slice
const options = {
    name: 'subreddit',
    initialState: {
        subReddit: {},
        isLoading: false,
        hasError: false
    },
    reducers: {
        deleteSubreddit: (state, action) => {
            state.subReddit = {};
        }
    },
    extraReducers: {
        [loadSubReddit.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubReddit.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.subReddit = action.payload;
        },
        [loadSubReddit.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError= true;
        }
    }
};

const subredditSlice = createSlice(options);

// Define selectors
export const selectSubReddit = (state) => state.subreddit.subReddit;

// Export actions 
export const { deleteSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;