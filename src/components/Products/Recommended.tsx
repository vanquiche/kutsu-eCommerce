import React from 'react';
import { list } from '../../db/server';
import { v4 } from 'uuid';
import './Product.css';
import ProductThumb from './ProductThumb';

const sliceList = () => {
  let newList = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * list.length);
    newList.push(list[random]);
  }
  return newList;
};

const Recommended = () => {
  const recommendList = sliceList();

  return (
    <div className='recommended-container'>
      <p className='recommended-title'>RECOMMENDATIONS FOR YOU</p>
      <div className='recommended-thumbs'>
        {recommendList.map((product) => (
          <ProductThumb
            product={product}
            keyRef={v4()}
            segment={`/shop/${product.id}`}
            handleClick={() => window.scrollTo(0, 0)}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
