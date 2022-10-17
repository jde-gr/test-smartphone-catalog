import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
