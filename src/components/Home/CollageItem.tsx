import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PromoLink from './PromoLink';
import {
  animateSlideRight,
  animateSlideDown,
  animateSlideLeft,
  animateSlideUp,
} from './animationVariant';

interface Props {
  inView: boolean;
  image: string;
  imgClass?: string;
  containerClass?: string;
  link: string;
  linkText?: string;
  animationDirection?: string;
}

const CollageItem: React.FC<Props> = ({
  inView,
  image,
  imgClass,
  containerClass,
  link,
  linkText,
  animationDirection,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const [showBtn, setShowBtn] = useState(false);

  const getVariant = (direction: string | undefined = 'right') => {
    switch (direction) {
      case 'left':
        return animateSlideLeft;
      case 'right':
        return animateSlideRight;
      case 'up':
        return animateSlideUp;
      case 'down':
        return animateSlideDown;
    }
  };

  return (
    <motion.div
      style={{ position: 'relative' }}
      className={`image-container ${containerClass}`}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={!isMobile ? getVariant(animationDirection) : undefined}
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      <img src={image} className={imgClass} loading='lazy' />
      <PromoLink path={link} text={linkText || 'SHOP NOW'} display={showBtn} />
    </motion.div>
  );
};

export default React.memo(CollageItem);
