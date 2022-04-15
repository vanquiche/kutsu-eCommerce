import React from 'react';
import { ProductType } from '../../types/Types';
import './Checkout.css';

interface Props {
  product: ProductType;
}

const CheckoutItem: React.FC<Props> = ({ product }) => {
  return (
    <div className='checkout-item'>
      <img className='checkout-thumbnail checkout-col-1' src={product.image} alt={product.item}/>
      <p className='checkout-col-2'>{(product.item).toUpperCase()}</p>
      <p className='checkout-col-3 item-qty'>{product.qty}</p>
      <p className='checkout-col-4 item-price'>${product.format}</p>
    </div>
  );
};

export default CheckoutItem;
