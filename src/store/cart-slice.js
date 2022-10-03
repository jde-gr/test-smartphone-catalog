import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'ui',
  initialState: {},
  reducers: {},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
