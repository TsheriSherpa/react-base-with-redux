import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        error: "",
        message: "",
        success: "",
    },
    reducers: {
        success: (state, action) => {
            state.success = action.payload;
        },
        error: (state, action) => {
            state.error = action.payload;
        },
        clear: (state) => {
            state.success = "";
            state.error = "";
            state.message = "";
        },
    },
});

export const { success, error, clear } = alertSlice.actions

export default alertSlice.reducer