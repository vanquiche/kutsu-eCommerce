import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Product } from '../../contexts/CartContext';
import './Product.css';

interface Props {
  product?: Product;
}

const Product: React.FC<Props> = ({ product }) => {
  console.log('render Product');

  return (
    <div className='product-container'>
      <LazyLoadImage
        alt='placeholder image'
        src='https://via.placeholder.com/200'
        className='product-image'
        effect='blur'
      />
      <p className='product-name'>{product?.item}</p>
      <p className='product-price'>{product?.price}</p>
    </div>
  );
};

export default React.memo(Product);
