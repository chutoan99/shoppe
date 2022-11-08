import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // search
    fetchSearchStart: (state) => {
      state.error = false;
      state.success = false;
      state.data = null;
    },
    fetchSearchSuccess: (state, action) => {
      state.success = true;
      state.data = action.payload;
    },
    fetchSearchFailed: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchSearchStart, fetchSearchSuccess, fetchSearchFailed } = searchSlice.actions;
export default searchSlice.reducer;
