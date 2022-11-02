import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categorySlice';
import productsReducer from './productsSlice';
import searchReducer from './searchSlice';
import productIdReducer from './productIdSlice';
import shopReducer from './shopSlice';
import commentsReducer from './commentSlice';
import otherReducer from './otherSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    productId: productIdReducer,
    products: productsReducer,
    search: searchReducer,
    shop: shopReducer,
    comments: commentsReducer,
    others: otherReducer,
    cart: cartReducer,
  },
});

export default store;
