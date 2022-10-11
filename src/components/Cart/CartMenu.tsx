import { useContext } from 'react';
import { toUnit } from 'dinero.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { GrFormClose } from 'react-icons/gr';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import './CartMenu.css';
import useDinero from '../../hooks/useDinero';

const CartMenu = (props: { keyRef: string; onClose: () => void }) => {
  const { state } = useContext(CartContext);
  const { sum } = useDinero(state);
  const format = toUnit(sum);

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
        <div className='checkout-btn-container'>
          <p className='cart-total'>
            SUBTOTAL <span className='cart-price'>${format.toFixed(2)}</span>
          </p>

          <Link to='/checkout'>
            <button
              className='add-btn checkout-btn'
              onClick={props.onClose}
              disabled={state.length === 0 ? true : false}
            >
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
      <div className='grid-overlay overlay' onClick={props.onClose}></div>
    </motion.aside>
  );
};

export default CartMenu;
