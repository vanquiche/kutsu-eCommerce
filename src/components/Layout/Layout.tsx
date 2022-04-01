import React, { useReducer } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {
  CartContext,
  reducer,
  initialState,
} from '../../contexts/CartContext';

const Layout = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Header />
      {props.children}

      <Footer />
    </CartContext.Provider>
  );
};

export default Layout;
