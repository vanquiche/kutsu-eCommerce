import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { CartContext, defaultValue } from './contexts/CartContext';


function App() {
  console.log('render App');
  
  // home page
  // checkout page
  // product page by id
  // const location = useLocation()
  const [cart, setCart] = useState(defaultValue.cart);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        {/* <Route /> */}
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
