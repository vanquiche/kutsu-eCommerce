import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ProductType } from '../../contexts/CartContext';
import './Product.css';
interface Props {
  product?: ProductType;
  keyRef?: string;
  segment?: string;
  handleClick?: () => void;
}

const ProductThumb: React.FC<Props> = ({ product, keyRef, segment, handleClick }) => {

  return (
    <div className='product-thumb-container' key={keyRef}>
      <Link
        to={segment || product!.id}
        state={{
          product: product,
        }}
        onClick={handleClick}
      >
        <LazyLoadImage
          alt='placeholder image'
          src={product?.image}
          className='product-thumb-image'
          effect='blur'
        />
      </Link>
      <p className='product-thumb-name'>{product?.item?.toUpperCase()}</p>
      <p className='product-thumb-price'>${product?.format}</p>
    </div>
  );
};

export default React.memo(ProductThumb);
