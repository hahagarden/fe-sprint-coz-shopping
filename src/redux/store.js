import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import bookmarkListSlice from "./bookmarkListSlice";
import productListSlice from "./productListSlice";

export const rootReducer = combineReducers({
  bookmarkList: bookmarkListSlice.reducer,
  productList: productListSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
