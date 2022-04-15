import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import './Header.css';

const CATEGORIES = ['LIFESTYLE', 'ATHLETIC', 'FASHION', 'KUTSUSHTA'];

export const LIFESTYLE_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/dq8768-100-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dh4621-300-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1201a490-020-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/31305940-1s.jpg',
];
export const FASHION_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/31306640-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/do9355-300-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/35500370-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1125510-wpms-1s.jpg',
];
export const ATHLETIC_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/dh1270-001-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dq8344-100-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dc9339-200-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dc7700-073-1s.jpg',
];
export const ACCESSORY_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/kr21aw-ot03-wht-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/kr21aw-ot01-blk-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/t23-21-006-blk-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/atm-pa-s012-naw-1s.jpg',
];
function ListImgs(props: { tabIndexStart?: number }) {
  // console.log('render display container');
  const indexStart = props.tabIndexStart ? props.tabIndexStart : 0;

  const [displayImages, setDisplayImages] = useState({
    category: 'lifestyle',
    links: LIFESTYLE_LINKS,
  });

  const changeDisplay = (selection: string) => {
    if (displayImages.category === selection) return;
    switch (selection) {
      case 'lifestyle'.toUpperCase():
        setDisplayImages({ category: selection, links: LIFESTYLE_LINKS });
        break;
      case 'fashion'.toUpperCase():
        setDisplayImages({ category: selection, links: FASHION_LINKS });
        break;
      case 'athletic'.toUpperCase():
        setDisplayImages({ category: selection, links: ATHLETIC_LINKS });
        break;
      case 'kutsushta'.toUpperCase():
        setDisplayImages({ category: selection, links: ACCESSORY_LINKS });
        break;
    }
  };

  return (
    <div className='menu-container'>
      <section className='grid-category'>
        {/* category links */}
        <ul className='category-link-container'>
          <li className='category-link'>
            <p style={{fontWeight: 500}}>CATEGORIES</p>
          </li>
          {CATEGORIES.map((link, index) => (
            <li
              className='category-link'
              tabIndex={index + indexStart}
              key={uuidv4()}
            >
              <Link to='/shop' onMouseEnter={() => changeDisplay(link)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='grid-images'>
        {/* gallery */}

        <div className='img-gallery'>
          {displayImages.links.map((image, index) => (
            <motion.div
              className='img-container'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index + 1) * 0.1 }}
              key={uuidv4()}
            >
              <img alt={'image of shoes'} className='menu-image' src={image} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default React.memo(ListImgs);
