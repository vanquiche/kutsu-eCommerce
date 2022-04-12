import React, { useContext, useMemo } from 'react';
import { dinero, toFormat, add } from 'dinero.js';
import { USD } from '@dinero.js/currencies';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { GrFormClose } from 'react-icons/gr';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import './CartMenu.css';

const CartMenu = (props: { keyRef: string; onClose: () => void }) => {
  const { state } = useContext(CartContext);
  const initialValue = dinero({ amount: 0, currency: USD });

  const cart = useMemo(() => {
    let items: any[] = [];
    state.forEach((product) => {
      const d = dinero({ amount: product.price * product.qty, currency: USD });
      items.push(d);
    });
    return items;
  }, [state]);

  const total = (addends: any) => addends.reduce(add, initialValue);

  const format = toFormat(total(cart), ({ amount }) => `${amount}`);

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
        <p className='cart-total'>
          Total: <span>${format}</span>
        </p>
        <button className='add-btn checkout-btn'>
          <Link to='/checkout'>CHECKOUT</Link>
        </button>
      </div>
      <div className='grid-overlay overlay' onClick={props.onClose}></div>
    </motion.aside>
  );
};

export default CartMenu;
