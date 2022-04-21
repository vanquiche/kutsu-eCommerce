import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ShowCartContext } from '../../contexts/ShowCartContext';
import './Layout.css';

const Layout = (props: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false)

  return (
    <ShowCartContext.Provider value={{showCart, setShowCart}}>
      <Header />
      <div className='layout-body'>{props.children}</div>
      <Footer />
    </ShowCartContext.Provider>
  );
};

export default Layout;
