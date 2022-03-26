import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Header.css';

const CATEGORIES = ['lifestyle', 'athletic', 'fashion', 'accessories'];

const LIFESTYLE_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/dq8768-100-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dh4621-300-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1201a490-020-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/31305940-1s.jpg',
];
const FASHION_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/31306640-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/do9355-300-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/35500370-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/1125510-wpms-1s.jpg',
];
const ATHLETIC_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/dh1270-001-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dq8344-100-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dc9339-200-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/dc7700-073-1s.jpg',
];
const ACCESSORY_LINKS = [
  'https://assets.atmos-tokyo.com/items/S/kr21aw-ot03-wht-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/kr21aw-ot01-blk-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/t23-21-006-blk-1s.jpg',
  'https://assets.atmos-tokyo.com/items/S/atm-pa-s012-naw-1s.jpg',
];
function ListImgs() {
  // console.log('render display container');

  const [displayImages, setDisplayImages] = useState({
    category: 'lifestyle',
    links: LIFESTYLE_LINKS,
  });

  const changeDisplay = (selection: string) => {
    if (displayImages.category === selection) return;
    switch (selection) {
      case 'lifestyle':
        setDisplayImages({ category: selection, links: LIFESTYLE_LINKS });
        break;
      case 'fashion':
        setDisplayImages({ category: selection, links: FASHION_LINKS });
        break;
      case 'athletic':
        setDisplayImages({ category: selection, links: ATHLETIC_LINKS });
        break;
      case 'accessories':
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
            <h4>CATEGORIES</h4>
          </li>
          {CATEGORIES.map((link, index) => (
            <li className='category-link' tabIndex={index} key={uuidv4()}>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                }}
                onMouseEnter={() => changeDisplay(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className='grid-images'>
        {/* gallery */}

        <div className='img-gallery'>
          {displayImages.links.map((image, index: number) => (
            <motion.div
              className='img-container'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index + 1) * 0.1 }}
              key={uuidv4()}
            >
              <LazyLoadImage
                alt={'image of shoes'}
                className='menu-image'
                effect='blur'
                src={image}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ListImgs;
