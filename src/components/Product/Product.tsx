import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Product.css';

interface DbProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

interface Props {
  product?: DbProduct;
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
      <p className='product-name'>{product?.title}</p>
      <p className='product-price'>{product?.price}</p>
    </div>
  );
};

export default React.memo(Product);
