import { useInView } from 'react-intersection-observer';
import CollageItem from './CollageItem';

import promo3 from '../../images/promo-3.jpg';
import promo4 from '../../images/promo-4.jpg';
import promo12 from '../../images/promo-12.jpg';
import promo7 from '../../images/promo-7.jpg';
import './Home.css';

const ANIMATION_DURATION = 0.75;
const ANIMATION_DELAY = 0;

const animateSlideRight = {
  hidden: {
    x: '-115%',
  },
  visible: {
    x: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};
const animateSlideDown = {
  hidden: {
    y: '-115%',
  },
  visible: {
    y: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};

const animateSlideLeft = {
  hidden: {
    x: '115%',
  },
  visible: {
    x: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};

const animateSlideUp = {
  hidden: {
    y: '115%',
  },
  visible: {
    y: 0,
    transition: {
      delay: ANIMATION_DELAY,
      duration: ANIMATION_DURATION,
    },
  },
};

const Collage = () => {

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
          variant={animateSlideRight}
          image={promo4}
          imgClass='promo-image'
          containerClass='grid-sec-1'
          link='shop'
          key='promo1'
        />

        <CollageItem
          inView={inView}
          variant={animateSlideDown}
          image={promo12}
          imgClass='promo-image'
          containerClass='grid-sec-2'
          link='shop'
          key='promo2'
        />

        <CollageItem
          inView={inView}
          variant={animateSlideLeft}
          image={promo3}
          imgClass='promo-image'
          containerClass='grid-sec-3'
          link='shop'
          key='promo3'
        />

        <CollageItem
          inView={inView}
          variant={animateSlideUp}
          image={promo7}
          imgClass='promo-image'
          containerClass='grid-sec-4'
          link='shop'
          key='promo4'
        />
      </div>
      <div className='collage-animate-ref' ref={ref}>
        {/* {`${inView}`} */}
      </div>
    </section>
  );
};

export default Collage;
