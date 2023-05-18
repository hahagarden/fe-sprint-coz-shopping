import { createSlice } from "@reduxjs/toolkit";

const bookmarkListSlice = createSlice({
  name: "bookmarkList",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex((el) => el.id === action.payload),
        1
      );
    },
    init: (state, action) => action.payload,
  },
});

export const { add, remove, init } = bookmarkListSlice.actions;

export default bookmarkListSlice;
