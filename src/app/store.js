import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/savePosts";
import checkReducer from "../features/checkPosts";

export const store = configureStore({
  reducer: {
    savePosts: postsReducer,
    checkPosts: checkReducer,
  },
});
