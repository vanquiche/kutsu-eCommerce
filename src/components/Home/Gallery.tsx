
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  className: 'carousel',
  accessibility: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const Gallery = () => {
  const title = 'FOLLOW THE DRIP';

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay: 1000,
  });
  return (
    <section id='gallery' className='gallery'>

      <h5 className='collage-title'>FOLLOW THE DRIP</h5>
      <div ref={ref} className='gallery-animate-ref'>
        {/* {`${inView}`} */}
      </div>

      <Slider {...settings}>
        <LazyLoadImage src='images/promo-6.jpg' className='gallery-image' />

        <LazyLoadImage src='images/promo-26.jpg' className='gallery-image' />

        <LazyLoadImage src='images/promo-20.jpg' className='gallery-image' />

        <LazyLoadImage src='images/promo-25.jpg' className='gallery-image' />
      </Slider>
    </section>
  );
};

export default Gallery;
