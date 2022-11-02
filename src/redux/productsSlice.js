import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // products
    fetchProductsStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchProductsFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailed } =
  productsSlice.actions;
export default productsSlice.reducer;
