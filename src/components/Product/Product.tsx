import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Product = () => {
  const { dispatch } = useContext(CartContext);
  console.log('render Product');

  const handleClick = () => {
    const newProduct = {
      id: Math.random().toString(),
      item: 'Milk',
      qty: 1,
      price: 5.99
    }
    dispatch({type: 'add item', product: newProduct})
  }

  return (
    <div style={{ margin: '1rem 2rem' }}>
      <h1>Products</h1>
      {/* <p>{state.cart}</p> */}
      {/* <button
          style={{ display: 'block', margin: '1rem 0' }}
          onClick={() => dispatch({type: 'increment'})}
        >
          add
        </button>
        <button
          style={{ display: 'block', margin: '1rem 0' }}
          onClick={() => dispatch({type: 'decrement'})}
        >
          subtract
        </button> */}

        <button onClick={handleClick}>add Product</button>
    </div>
  );
};

export default React.memo(Product);
