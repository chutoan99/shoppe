import React from 'react';
import { Routes, Route } from 'react-router-dom';
import path from './path';
import {
  Pay,
  Oder,
  Shop,
  Search,
  Home,
  Profile,
  LoginForm,
  PageNotFound,
  RegisterForm,
  DetailProduct,
  Categories,
  StatusOrder,
} from '../Page/index';
function App() {
  return (
    <Routes>
      <Route path={path.PAY} element={<Pay />} />
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.ORDER} element={<Oder />} />
      <Route path={path.SHOP_ID} element={<Shop />} />
      <Route path={path.SEARCH} element={<Search />} />
      <Route path={path.LOGIN} element={<LoginForm />} />
      <Route path={path.PROFILE} element={<Profile />} />
      <Route path={path.REGISTER} element={<RegisterForm />} />
      <Route path={path.CATEGORIES} element={<Categories />} />
      <Route path={path.STATUS_ORDER} element={<StatusOrder />} />
      <Route path={path.PAGE_NOT_POUND} element={<PageNotFound />} />
      <Route path={path.DETAIL_PRODUCT} element={<DetailProduct />} />
      <Route path={path.DETAIL_PRODUCT_ID} element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
