import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set } = productListSlice.actions;

export default productListSlice;
