import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CheckoutPage from './pages/CheckoutPage'
import ShopItem from './pages/ShopItem';
import PageNotFound from './pages/404page';
import './App.css';

import { CartContext } from './contexts/CartContext';
import {reducer} from './reducer/reducer'

function App() {
  const userCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const [state, dispatch] = useReducer(reducer, userCart);



  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='*' element={<PageNotFound />}/>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        <Route path='shop'>
          <Route index element={<Shop />} />
          <Route path=':id' element={<ShopItem />} />
        </Route>
        <Route path='checkout'>
          <Route index element={<CheckoutPage />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
