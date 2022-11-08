import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    start: 0,
    PER_PAGE: 48,
    end: 48,
  },
  reducers: {
    // UpdatePage
    UpdatePage: (state, action) => {
      let newCurrent = action.payload;
      if (action.payload === 0) {
        newCurrent = action.payload + 1;
      }
      state.end = newCurrent * state.PER_PAGE;
      state.start = state.end - state.PER_PAGE;
    },
  },
});

export const { UpdatePage } = paginationSlice.actions;
export default paginationSlice.reducer;
