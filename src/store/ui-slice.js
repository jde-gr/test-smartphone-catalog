import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { haveLocalProducts: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleProductListIsLocal(state) {
      state.haveLocalProducts = !state.haveLocalProducts;
    },
    setProductListIsLocal(state) {
      state.haveLocalProducts = true;
    },
    setNoLocalProductList(state) {
      state.haveLocalProducts = false;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
