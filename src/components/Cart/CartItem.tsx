import React, { useContext } from 'react';
import { CartContext, Product } from '../../contexts/CartContext';
import { HiMinus, HiPlus } from 'react-icons/hi';
import './CartMenu.css';

const CartItem = (props: { product: Product, keyRef: string }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div key={props.keyRef}>
      <p>{props.product.item}</p>
      <p>${props.product.price}</p>
      <div className='qty-container'>
        <button
          onClick={() =>
            dispatch({ type: 'decrement', product: props.product })
          }
          disabled={props.product.qty === 0 ? true : false}
        >
          <HiMinus size='1.2em' />
        </button>
        {props.product.qty === 0 ? (
          <button
            onClick={() =>
              dispatch({ type: 'remove item', product: props.product })
            }
          >
            delete
          </button>
        ) : (
          <p>{props.product.qty}</p>
        )}

        <button
          onClick={() =>
            dispatch({ type: 'increment', product: props.product })
          }
        >
          <HiPlus size='1.2em' />
        </button>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
