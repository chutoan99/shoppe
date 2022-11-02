import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // categories
    fetchCategoryStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },

    fetchCategorySuccess: (state, action) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchCategoryFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchCategoryStart, fetchCategorySuccess, fetchCategoryFailed } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
