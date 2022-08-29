import React from 'react';
import Pay from '../Page/pay/index';
import Oder from '../Page/Oder/index';
import Shop from '../Page/shop/index';
import Search from '../Page/search/index';
import Home from '../Page/home/index';
import Profile from '../Page/profile/index';
import LoginForm from '../Page/login/index.js';
import PageNotFound from '../Page/pageNotFound';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from '../Page/register/index';
import DetailProduct from '../Page/detailProduct';
import Categories from '../Page/Categories/index';
import StatusOrder from '../Page/statusOrder';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/oder" element={<Oder />} />
      <Route path="/shop/:id" element={<Shop />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/StatusOrder" element={<StatusOrder />} />
      <Route path="/detailProduct" element={<DetailProduct />} />
      <Route path="/detailProduct/:idItem/:name/:shopId" element={<DetailProduct />} />
      <Route path="/categories/:categories_name" element={<Categories />} />
    </Routes>
  );
}

export default App;
