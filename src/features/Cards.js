// store/cardSlice.js (or cartSlice.js)
import { createSlice } from "@reduxjs/toolkit";
import { loadCart, saveCart } from "../utlis/localStorage";

const initialState = {
  items: loadCart(),
};

const cardSlice = createSlice({
  name: "cart", // Changed from "card" to "cart" for clarity
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCart(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      saveCart(state.items);
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity = action.payload.quantity;
        saveCart(state.items);
      }
    },

    clearCart: (state) => {
      state.items = [];
      saveCart(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cardSlice.actions;
export default cardSlice.reducer;