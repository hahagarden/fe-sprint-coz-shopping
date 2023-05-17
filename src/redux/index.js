import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bookmarkListSlice from './bookmarkListSlice';
import productListSlice from './productListSlice';

const persistConfig = {
  key: 'bookmark',
  storage,
  whitelist: ['bookmarkList'],
};

export const rootReducer = combineReducers({
  bookmarkList: bookmarkListSlice.reducer,
  productList: productListSlice.reducer,
});

export default persistReducer(persistConfig, rootReducer);
