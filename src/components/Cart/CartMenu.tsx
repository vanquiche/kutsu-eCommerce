import React, { useContext, useCallback } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { GrFormClose } from 'react-icons/gr';
import './CartMenu.css';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const CartMenu = (props: { keyRef: string; onClose: () => void }) => {

  const { state } = useContext(CartContext);

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

        <div>
          {state.map((product) => {
            return <CartItem product={product} keyRef={uuidv4()}/>;
          })}
        </div>
      </div>
      <div className='grid-overlay overlay' onClick={props.onClose}></div>
    </motion.aside>
  );
};

export default CartMenu;
