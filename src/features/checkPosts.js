import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  added: false,
};

export const checkSlice = createSlice({
  name: "checkPosts",
  initialState,
  reducers: {
    check: (state, action) => {
      state.added = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { check } = checkSlice.actions;

export default checkSlice.reducer;
