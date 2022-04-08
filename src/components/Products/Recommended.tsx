import React from 'react';
import { list } from '../../db/server';
import './Product.css';
import ProductThumb from './ProductThumb';
import { useLocation, matchPath, Link } from 'react-router-dom';

const sliceList = () => {
  let newList = [];

  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * list.length);
    newList.push(list[random]);
  }

  return newList;
};

const recommendList = sliceList();

const Recommended = () => {
  // const {pathname} = matchPath
  const {pathname} = useLocation();
  const shopPath = matchPath('shop/', pathname)
  console.log(shopPath)
  return (
    <div className='recommended-container'>
      <p className='recommended-title'>RECOMMENDATIONS FOR YOU</p>
      <div className='recommended-thumbs'>
        {recommendList.map((product) => (
          <ProductThumb product={product} />
        // <Link to={product.id}>{product.item}</Link>
        ))}
      </div>

    </div>
  );
};

export default Recommended;
