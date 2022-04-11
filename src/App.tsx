import React, { useReducer, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopItem from './pages/ShopItem';
import './App.css';

import { CartContext, reducer } from './contexts/CartContext';

function App() {
  const userCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const [state, dispatch] = useReducer(reducer, userCart);



  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        <Route path='shop/'>
          <Route index element={<Shop />} />
          <Route path=':id' element={<ShopItem />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
