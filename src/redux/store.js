import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import bookmarkListSlice from "./bookmarkListSlice";
import productListSlice from "./productListSlice";
import modalDataSlice from "./modalDataSlice";

export const rootReducer = combineReducers({
  bookmarkList: bookmarkListSlice.reducer,
  productList: productListSlice.reducer,
  modalData: modalDataSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
