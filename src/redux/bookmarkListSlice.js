import { createSlice } from "@reduxjs/toolkit";
import { StorageKey } from "../utils/enum";
import { setLocalStorage } from "../utils/func";

const bookmarkListSlice = createSlice({
  name: "bookmarkList",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      setLocalStorage(StorageKey.BOOKMARKS, state);
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex((bookmarkedProduct) => bookmarkedProduct.id === action.payload),
        1
      );
      setLocalStorage(StorageKey.BOOKMARKS, state);
    },
    init: (_, action) => action.payload,
  },
});

export const { add, remove, init } = bookmarkListSlice.actions;

export default bookmarkListSlice;
