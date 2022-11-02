import { createSlice } from '@reduxjs/toolkit';
import { data } from 'jquery';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    numberCart: 0,
    buyCart: [],
    numberBuyCart: 0,
    orDerCart: [],
    numberOrderCart: 0,
  },
  reducers: {
    // cart
    addCart: (state, action) => {
      state.data = [...state.data, action.payload];
      state.numberCart = state.data.length;
    },
    deleteCart: (state, action) => {
      const newCart = [...state.data];
      newCart.splice(action.payload, 1);
      state.data = newCart;
      state.numberCart = state.data.length;
    },
    addBuyCart: (state, action) => {
      state.buyCart = [...state.buyCart, action.payload][0];
      state.numberBuyCart = state.buyCart.length;
    },
    deleteBuyCart: (state, action) => {
      const newCart = [...state.buyCart];
      newCart.splice(0, action.payload);
      state.buyCart = newCart;
      state.numberBuyCart = state.numberBuyCart.length;
    },
    addOrDerCart: (state, action) => {
      state.orDerCart = [...state.orDerCart, action.payload][0];
      state.numberOrderCart = state.orDerCart.length;
    },
    updateOption: (state, action) => {
      const { option, index } = action.payload;
      let currentDataCart = [...state.data];
      currentDataCart[index].newOption = option;
      state.data = currentDataCart;
    },
    updateAmount: (state, action) => {
      const { newAmount, index } = action.payload;
      let currentDataCart = [...state.data];
      currentDataCart[index].amount = newAmount;
      state.data = currentDataCart;
    },
  },
});

export const {
  addCart,
  deleteCart,
  addBuyCart,
  addOrDerCart,
  deleteBuyCart,
  updateOption,
  updateAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
