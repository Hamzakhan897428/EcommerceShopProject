// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cards';  // Note: path is ../features/cardSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;