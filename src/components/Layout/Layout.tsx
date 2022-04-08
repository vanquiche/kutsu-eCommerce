import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className='layout-body'>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
