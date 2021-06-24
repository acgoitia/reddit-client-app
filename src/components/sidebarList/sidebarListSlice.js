import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubRedditData } from '../../utils';


// Async action creator
export const loadSubReddits = createAsyncThunk('sidebarList/loadSubReddits', async (subRedditUrl, thunkAPI) => {
    const response = await fetch(subRedditUrl);
    const jsonData = await response.json();
    
    const subRedditArray = jsonData.data.children; // array of subreddits objects
    
    return getSubRedditData(subRedditArray);
    
})


// create slice
const options = {
    name: 'sidebarList',
    initialState: {
        subReddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        resetSubReddits: (state, action) => {
            state.subReddits = [];
        }
    },
    extraReducers: {
        [loadSubReddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubReddits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.subReddits = action.payload;
        },
        [loadSubReddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError= true;
        }
    }
};

const sidebarListSlice = createSlice(options);

// Define selectors
export const selectSubReddits = (state) => state.sidebarList.subReddits;

// Export actions 
export const { resetSubReddits } = sidebarListSlice.actions;
export default sidebarListSlice.reducer;