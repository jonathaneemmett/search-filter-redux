import { configureStore } from '@reduxjs/toolkit';

// Reducer Files
import postReducer from "../reducers/postReducer";

export const store = configureStore({
  reducer: {
    posts: postReducer
  },
});
