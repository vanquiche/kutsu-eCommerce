import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { motion } from 'framer-motion';
import { BsFillBagFill } from 'react-icons/bs';

interface Props {
  handleClick?: () => void;
  handleMouseEnter?: () => void;
}

const CartBtn: React.FC<Props> = ({ handleClick, handleMouseEnter }) => {
  const { state } = useContext(CartContext);
  const cartCount = state.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);

  return (
    <div className='grid-col-3'>
      <motion.span
        className='cart-count'
        key={cartCount}
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{duration: 0.3, ease: 'easeIn'}}
      >
        {cartCount}
      </motion.span>
      <button
        tabIndex={5}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        <BsFillBagFill className='cart-btn' size='1.2em' />
      </button>
    </div>
  );
};

export default CartBtn;
