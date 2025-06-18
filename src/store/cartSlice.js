import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const item = state.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ id, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter(i => i.id !== id);
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(i => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 