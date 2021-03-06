import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ProductType } from '../../types/Types';
import './Product.css';
interface Props {
  product?: ProductType;
  keyRef?: string;
  segment?: string;
  handleClick?: () => void;
}

const PlaceHolderImg = () => {
  return (
    <div style={{width: '200px', height: '200px', backgroundColor: 'white'}}></div>
  )
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
          alt=''
          src={product?.image}
          className='product-thumb-image'
          effect='blur'
          placeholder={<PlaceHolderImg />}
        />
      </Link>
      <p className='product-thumb-name'>{product?.item?.toUpperCase()}</p>
      <p className='product-thumb-price'>${product?.format}</p>
    </div>
  );
};

export default React.memo(ProductThumb);
