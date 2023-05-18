import { createSlice } from "@reduxjs/toolkit";

const modalDataSlice = createSlice({
  name: "modalData",
  initialState: null,
  reducers: {
    add: (state, action) => action.payload,
    remove: (state, action) => null,
  },
});

export const { add, remove } = modalDataSlice.actions;

export default modalDataSlice;
