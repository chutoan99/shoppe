import Pay from '../Page/pay';
import RegisterForm from '../Page/register/index';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../Page/pageNotFound';
import LoginForm from '../Page/login/index.js';
import Profile from '../Page/profile/index';
import DetailProduct from '../Page/detailProduct';
import Home from '../Page/home/index';
import Search from '../Page/search';
import React from 'react';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/search" element={<Search />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/detailProduct" element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
