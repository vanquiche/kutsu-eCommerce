import React from 'react';
import { v4 } from 'uuid';
import ProductThumb from './ProductThumb';
import { list } from '../../db/server';

const Catalogue = () => {
  return (
    <>
      <div className='catalogue-container'>
        {list?.map((product) => {
          return <ProductThumb product={product} keyRef={v4()} key={v4()}/>;
        })}
      </div>
    </>
  );
};

export default React.memo(Catalogue);
