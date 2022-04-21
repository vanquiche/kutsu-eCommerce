import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Home.css';
import { Link } from 'react-router-dom';

interface Props {
  image?: string;
}

const animateSlideUp = {
  hidden: { y: '500%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const sneakers = [
  'SNEAKERS',
  'TENISKY',
  'GUMMISKO',
  'BAMBAS',
  'LENKKARIT',
  'ADIDAS',
  'BASKETS',
];

const Promo: React.FC<Props> = ({ image }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const [display, setDisplay] = useState('');
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 1000,
  });
  return (
    <div className='promo-container'>
      <div className='text-container'>
        <ul className='box-text-container'>
          {sneakers.map((x, i) => (
            <motion.li
              className='box-text cursor-none'
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={!isMobile ? animateSlideUp : undefined}
              transition={{ delay: i * 0.1, ease: 'easeOut' }}
              key={x}
            >
              {x}
            </motion.li>
          ))}
        </ul>
      </div>
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setDisplay('show-btn')}
        onMouseLeave={() => setDisplay('')}
      >
        <LazyLoadImage
          src={image}
          className='promo-image cursor-none'
          effect='blur'
        />
        <Link className={`promo-link ${display}`} to='shop'>
          SHOP NOW
        </Link>
      </div>
      <div ref={ref}></div>
    </div>
  );
};

export default React.memo(Promo);
