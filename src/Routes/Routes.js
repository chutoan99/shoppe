import ShoppingCartList from '../Page/shoppingCartList';
import RegisterForm from '../Page/register/index';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../Page/pageNotFound';
import LoginForm from '../Page/login/index.js';
import Profile from '../Page/profile/index';
import Shopping from '../Page/shopping';
import Home from '../Page/home/index';
import Search from '../Page/search';
import React from 'react';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/shoppingCartList" element={<ShoppingCartList />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
