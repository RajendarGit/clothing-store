import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";

interface CartState {
  items: (Product & { quantity: number })[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      const quantityToAdd = item.quantity ?? 1;

      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.items.push({ ...item, quantity: quantityToAdd });
      }
    },

    reduceItemQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== itemId);
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, reduceItemQuantity, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
