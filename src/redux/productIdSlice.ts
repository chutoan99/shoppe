import { createSlice } from '@reduxjs/toolkit';

const productIdSlice = createSlice({
  name: 'productId',
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // productId
    fetchProductIdStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchProductIdSuccess: (state, action) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchProductIdFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchProductIdStart, fetchProductIdSuccess, fetchProductIdFailed } = productIdSlice.actions;
export default productIdSlice.reducer;
