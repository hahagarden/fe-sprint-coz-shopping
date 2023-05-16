import { configureStore } from "@reduxjs/toolkit";
import bookmarkListSlice from "./bookmarkListSlice";
import productListSlice from "./productListSlice";

const store = configureStore({
  reducer: { bookmarkList: bookmarkListSlice.reducer, productList: productListSlice.reducer },
});

export default store;
