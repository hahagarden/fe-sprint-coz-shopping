import { createSlice } from "@reduxjs/toolkit";
import { StorageKey } from "../utils/enum";

const bookmarkListSlice = createSlice({
  name: "bookmarkList",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem(StorageKey.BOOKMARKS, JSON.stringify(state));
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex((el) => el.id === action.payload),
        1
      );
      localStorage.setItem(StorageKey.BOOKMARKS, JSON.stringify(state));
    },
    init: (state, action) => action.payload,
  },
});

export const { add, remove, init } = bookmarkListSlice.actions;

export default bookmarkListSlice;
