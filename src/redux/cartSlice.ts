import { createSlice } from '@reduxjs/toolkit';

interface initial {
  data: any;
  numberCart: number;
  buyCart: any;
  numberBuyCart: number;
  orDerCart: any;
  numberOrderCart: number;
}
const initialState: initial = {
  data: [],
  numberCart: 0,
  buyCart: [],
  numberBuyCart: 0,
  orDerCart: [],
  numberOrderCart: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
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
      const newCar = action.payload[0];
      state.buyCart = [...state.buyCart, newCar];
      state.numberBuyCart = state.buyCart.length;
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
    // buyCart
    deleteBuyCart: (state, action) => {
      const newCart = [...state.buyCart];
      newCart.splice(0, action.payload);
      state.buyCart = newCart;
      state.numberBuyCart = state.buyCart.length;
    },
    // orDerCart
    addOrDerCart: (state, action) => {
      const newCar = action.payload[0];
      state.orDerCart = [...state.orDerCart, newCar];
      state.numberOrderCart = state.orDerCart.length;
    },
  },
});

export const { addCart, deleteCart, addBuyCart, addOrDerCart, deleteBuyCart, updateOption, updateAmount } = cartSlice.actions;
export default cartSlice.reducer;
