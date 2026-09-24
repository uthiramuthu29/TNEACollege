import { configureStore } from "@reduxjs/toolkit";
import cutoffReducer from "./slices/cutoffSlice";

export const store = configureStore({
    reducer: {
        cutoff: cutoffReducer,
    }
})