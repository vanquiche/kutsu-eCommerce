import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = (props: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
