import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    photoURL: '',
    displayName: '',
    email: '',
    providerId: '',
    uid: '',
    address: '',
    birthday: '',
    gender: '',
  },
  reducers: {
    // user
    fetchUser: (state, action) => {
      const { photoURL, displayName, email, providerId, uid } = action.payload;
      state.data = action.payload;
      state.photoURL = photoURL;
      state.displayName = displayName;
      state.email = email;
      state.providerId = providerId;
      state.uid = uid;
    },
    updateAvatar: (state, action) => {
      const newPhotoURl = action.payload;
      state.photoURL = newPhotoURl;
    },
    updateAddress: (state, action) => {
      const newAddress = action.payload;
      state.address = newAddress;
    },
    updateBirthday: (state, action) => {
      const newBirthday = action.payload;
      state.birthday = newBirthday;
    },
    updateGender: (state, action) => {
      const newGender = action.payload;
      state.gender = newGender;
    },
  },
});

export const { fetchUser, updateAvatar, updateBirthday, updateGender, updateAddress } = userSlice.actions;
export default userSlice.reducer;
