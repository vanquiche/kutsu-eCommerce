import React, { useContext } from 'react';
// import { CartContext } from '../App'
import { CartContext } from '../contexts/CartContext';

import Layout from '../components/Layout/Layout';

const Home = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <Layout>
      <h1>Hello World</h1>
      {cart}
      <button onClick={() => setCart((count) => count + 1)}>click me</button>
    </Layout>
  );
};

export default Home;
