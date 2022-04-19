import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PromoLink from './PromoLink';

interface Props {
  inView: boolean;
  image: string;
  variant: any;
  key?: string;
  imgClass?: string;
  containerClass?: string;
  link: string;
  linkText?: string;
}

const CollageItem: React.FC<Props> = ({
  inView,
  image,
  variant,
  key,
  imgClass,
  containerClass,
  link,
  linkText
}) => {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <motion.div
      style={{ position: 'relative' }}
      className={`image-container ${containerClass}`}
      initial={'hidden'}
      animate={inView ? 'visible' : 'hidden'}
      variants={variant}
      key={key}
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      <LazyLoadImage src={image} className={imgClass} />
      <PromoLink path={link} text={linkText || 'SHOP NOW'} display={showBtn} />
    </motion.div>
  );
};

export default React.memo(CollageItem);
