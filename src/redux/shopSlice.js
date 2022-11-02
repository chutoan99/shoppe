import { createSlice } from '@reduxjs/toolkit';

const shopeSlice = createSlice({
  name: 'shop',
  initialState: {
    shopInfo: {
      data: null,
      error: false,
      success: false,
    },
    shopItem: {
      data: null,
      error: false,
      success: false,
    },
  },
  reducers: {
    // shopInfo
    fetchShopInfoStart: (state) => {
      state.shopInfo.error = false;
      state.shopInfo.success = false;
      state.shopInfo.data = null;
    },
    fetchShopInfoSuccess: (state, action) => {
      state.shopInfo.success = true;
      state.shopInfo.data = action.payload;
    },
    fetchShopInfoFailed: (state, action) => {
      state.shopInfo.data = null;
      state.shopInfo.error = action.payload;
    },
    // shopItem
    fetchShopItemStart: (state) => {
      state.shopItem.error = false;
      state.shopItem.success = false;
      state.shopItem.data = null;
    },
    fetchShopItemSuccess: (state, action) => {
      state.shopItem.success = true;
      state.shopItem.data = action.payload;
    },
    fetchShopItemFailed: (state, action) => {
      state.shopItem.data = null;
      state.shopItem.error = action.payload;
    },
  },
});

export const {
  fetchShopInfoStart,
  fetchShopInfoSuccess,
  fetchShopInfoFailed,
  fetchShopItemStart,
  fetchShopItemSuccess,
  fetchShopItemFailed,
} = shopeSlice.actions;
export default shopeSlice.reducer;
