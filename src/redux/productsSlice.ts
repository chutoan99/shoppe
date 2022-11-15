import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isFetching: false,
    isLoading: false,
    error: false,
    isSuccess: false,
  },
  reducers: {
    // products
    fetchProducts: (state, action) => {
      const { data, isLoading, isSuccess, error, isFetching } = action.payload;
      state.isSuccess = isSuccess;
      state.isLoading = isLoading;
      state.data = data;
      state.error = error;
      state.isFetching = isFetching;
    },
  },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
