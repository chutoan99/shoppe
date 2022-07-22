import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../Page/LoginForm.js';
import Home from '../Page/Home.js';
import RegisterForm from '../Page/RegisterForm';
import ShoppingCartList from '../Page/shoppingCartList';
import Shopping from '../Page/shopping';
import Search from '../Page/Search';
import PageNotFound from '../Page/PageNotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/shoppingCartList" element={<ShoppingCartList />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
