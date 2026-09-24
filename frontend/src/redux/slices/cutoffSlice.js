import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cutoff: "",
    community: ""
}

const cutoffSlice = createSlice({
    name: "cutoff",
    initialState,

    reducers: {
        setCutoffQuery: (state, action) => {
            state.cutoff = action.payload.cutoff;
            state.community = action.payload.community;
        },

        clearCutoffQuery: (state) => {
            state.cutoff = "";
            state.community = "";
        }
    }
})

export const {
    setCutoffQuery,
    clearCutoffQuery
} = cutoffSlice.actions;

export default cutoffSlice.reducer;