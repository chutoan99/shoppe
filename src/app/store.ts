import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoriesReducer from '../redux/categorySlice';
import productsReducer from '../redux/productsSlice';
import searchReducer from '../redux/searchSlice';
import productIdReducer from '../redux/productIdSlice';
import shopReducer from '../redux/shopSlice';
import commentsReducer from '../redux/commentSlice';
import otherReducer from '../redux/otherSlice';
import cartReducer from '../redux/cartSlice';
import paginationReducer from '../redux/pagination';
import userReducer from '../redux/userSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    productId: productIdReducer,
    products: productsReducer,
    search: searchReducer,
    shop: shopReducer,
    comments: commentsReducer,
    others: otherReducer,
    cart: cartReducer,
    pagination: paginationReducer,
    user: userReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
