import { createSlice } from '@reduxjs/toolkit';

const initalCartState = { itemCount: 0 };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initalCartState,
  reducers: {
    setCartItemCount(state, action) {
      state.itemCount += action.payload.count;
    },
  },
});

export const { setCartItemCount } = cartSlice.actions;

export default cartSlice;
