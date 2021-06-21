import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'post',
    initialState: '',
    reducers: {
        editTitle: (state, action) => state = action.payload
    }
}

const postSlice = createSlice(options);

export const selectTitle = (state) => state.post;

export const { editTitle } = postSlice.actions;
export default postSlice.reducer;