import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { GrFormClose } from 'react-icons/gr';

import './CartMenu.css';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const CartMenu = (props: { keyRef: string; onClose: () => void }) => {
  const { state } = useContext(CartContext);

  const total = state.reduce((acc, product) => {
    return acc + parseFloat((product.qty * product.price).toFixed(2))
  }, 0)

  return (
    <motion.aside
      key={props.keyRef}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <div className='grid-cart cart'>
        <button onClick={props.onClose}>
          <GrFormClose size='1.5em' />
        </button>
        <p className='cart-title'>Your Shopping Cart</p>
        <div className='cart-wrapper'>
          {state.map((product) => {
            return <CartItem product={product} keyRef={uuidv4()} />;
          })}
        </div>
        <p>Total: <span>${total}</span></p>
        <button className='add-btn checkout-btn'>
          <Link to='/checkout'>CHECKOUT</Link>
        </button>
      </div>
      <div className='grid-overlay overlay' onClick={props.onClose}></div>
    </motion.aside>
  );
};

export default CartMenu;
