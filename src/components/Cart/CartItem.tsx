import React, { useContext } from 'react';
import { CartContext, ProductType } from '../../contexts/CartContext';
import { HiMinus, HiPlus, HiTrash } from 'react-icons/hi';
import './CartMenu.css';

const CartItem = (props: { product: ProductType; keyRef: string }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div key={props.keyRef} className='cart-container'>
      <img src={props.product.image} className='cart-thumbnail' />
      <div className='cart-detail-container'>
        <p className='cart-name'>{props.product.item.toUpperCase()}</p>
        <p className='cart-price'>${props.product.format}</p>
        <div className='qty-container'>
          {/* decrement item qty */}
          <button
            onClick={() =>
              dispatch({ type: 'decrement', product: props.product })
            }
            disabled={props.product.qty === 0 ? true : false}
          >
            <HiMinus size='1.2em' />
          </button>
          {props.product.qty === 0 ? (
            // delete item from cart
            <button
              onClick={() =>
                dispatch({ type: 'remove item', product: props.product })
              }
            >
              <HiTrash size='1.2em' color='tomato' />
            </button>
          ) : (
            <p>{props.product.qty}</p>
          )}
          {/* add item qty */}
          <button
            onClick={() =>
              dispatch({ type: 'increment', product: props.product })
            }
            disabled={props.product.qty < props.product.stock! ? false : true}
          >
            <HiPlus size='1.2em' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
