import { createSlice } from "@reduxjs/toolkit";

const modalDataSlice = createSlice({
  name: "modalData",
  initialState: null,
  reducers: {
    add: (_, action) => action.payload,
    remove: () => null,
  },
});

export const { add, remove } = modalDataSlice.actions;

export default modalDataSlice;
