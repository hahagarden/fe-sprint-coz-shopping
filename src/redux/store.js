import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './index';
import persistStore from 'redux-persist/es/persistStore';

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
