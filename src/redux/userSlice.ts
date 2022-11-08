import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    error: false,
    success: false,
  },
  reducers: {
    // user
    fetchUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchUser } = userSlice.actions;
export default userSlice.reducer;
