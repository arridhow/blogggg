import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "savePosts",
  initialState,
  reducers: {
    add: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = postsSlice.actions;

export default postsSlice.reducer;
