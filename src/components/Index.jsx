import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Header from './Header';

const Index = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Index;
