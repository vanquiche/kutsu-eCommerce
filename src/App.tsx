import React, { createContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  console.log('render App');

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
      </Route>
      <Route path='shop'>
        <Route index element={<Shop />} />
        <Route path=':id' element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
