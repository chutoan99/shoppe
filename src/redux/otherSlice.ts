import { createSlice } from '@reduxjs/toolkit';
interface initialState {
  toast: boolean;
  userLogin: boolean;
  heart: boolean;
  dataHistorySearch: String[];
}
const initialState: initialState = {
  toast: false,
  userLogin: false,
  heart: false,
  dataHistorySearch: ['Kem dưỡng da', 'Kem dưỡng da', 'Kem trị mụn'],
};
const otherSlice = createSlice({
  name: 'others',
  initialState: initialState,
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
      localStorage.setItem('login', JSON.stringify(state.userLogin));
    },
    // userLogOut
    updateUserLogOut: (state) => {
      state.userLogin = false;
      localStorage.setItem('login', JSON.stringify(state.userLogin));
    },
    // heart
    updateHeartTrue: (state) => {
      state.heart = true;
    },
    updateHeartFalse: (state) => {
      state.heart = false;
    },
    addDataHistorySearch: (state, action) => {
      state.dataHistorySearch = [action.payload, ...state.dataHistorySearch];
    },
  },
});

export const { updateToastTrue, updateToastFalse, updateUserLogin, updateUserLogOut, updateHeartTrue, updateHeartFalse, addDataHistorySearch } = otherSlice.actions;
export default otherSlice.reducer;
