import { createSlice } from '@reduxjs/toolkit';

const otherSlice = createSlice({
  name: 'others',
  initialState: {
    toast: false,
    userLogin: false,
    heart: false,
  },
  reducers: {
    // toast
    updateToastTrue: (state) => {
      state.toast = true;
    },
    updateToastFalse: (state) => {
      state.toast = false;
    },
    // userLogin
    updateUserLogin: (state) => {
      state.userLogin = true;
    },
    // userLogOut
    updateUserLogOut: (state) => {
      state.userLogin = false;
    },
    // heart
    updateHeartTrue: (state) => {
      state.heart = true;
    },
    updateHeartFalse: (state) => {
      state.heart = false;
    },
  },
});

export const {
  updateToastTrue,
  updateToastFalse,
  updateUserLogin,
  updateUserLogOut,
  updateHeartTrue,
  updateHeartFalse,
} = otherSlice.actions;
export default otherSlice.reducer;
