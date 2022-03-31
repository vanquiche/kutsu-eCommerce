import React, { useContext } from 'react';
import { CartContext } from '../App';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <Layout>
      <div style={{ margin: '1rem 2rem' }}>
        <h1>Hello World</h1>
        <p>{state.cart}</p>
        <button
          style={{ display: 'block', margin: '1rem 0' }}
          onClick={() => dispatch('increment')}
        >
          add
        </button>
        <button
          style={{ display: 'block', margin: '1rem 0' }}
          onClick={() => dispatch('decrement')}
        >
          subtract
        </button>
      </div>
    </Layout>
  );
};

export default Home;
