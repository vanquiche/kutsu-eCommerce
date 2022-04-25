import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductPage from '../components/Products/ProductPage';

const ShopItem = () => {
  const location = useLocation();
  const { product }: any = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <ProductPage product={product} />
    </Layout>
  );
};

export default ShopItem;
