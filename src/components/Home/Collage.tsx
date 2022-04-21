import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import CollageItem from './CollageItem';

import promo3 from '../../images/promo-3.jpg';
import promo4 from '../../images/promo-4.jpg';
import promo12 from '../../images/promo-12.jpg';
import promo7 from '../../images/promo-7.jpg';
import './Home.css';

const Collage = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 1000,
  });

  return (
    <section id='collage-section' className='collage-container'>
      <h5 className='collage-title'>GOOD THINGS AWAIT</h5>

      <div className='collage'>
        <CollageItem
          inView={inView}
          animationDirection='right'
          image={promo4}
          imgClass='promo-image'
          containerClass='grid-sec-1'
          link='shop'
        />

        <CollageItem
          inView={inView}
          animationDirection={isMobile ? 'left' : 'down'}
          image={promo12}
          imgClass='promo-image'
          containerClass='grid-sec-2'
          link='shop'
        />

        <CollageItem
          inView={inView}
          animationDirection={isMobile ? 'right' : 'left'}
          image={promo3}
          imgClass='promo-image'
          containerClass='grid-sec-3'
          link='shop'
        />

        <CollageItem
          inView={inView}
          animationDirection={isMobile ? 'left' : 'up'}
          image={promo7}
          imgClass='promo-image'
          containerClass='grid-sec-4'
          link='shop'
        />
      </div>
      <div className='collage-animate-ref' ref={ref}>
        {/* {`${inView}`} */}
      </div>
    </section>
  );
};

export default Collage;
