import { motion } from 'framer-motion';
import HoverVideoPlayer from 'react-hover-video-player';

import Video from '../../videos/video-2.mp4';
import Collage from './Collage';
import Promo from './Promo';
import './Home.css';

import promo9 from '../../images/promo-9.jpg';
import Gallery from './Gallery';

const getQuote = () => {
  const quotes = [
    'good shoes take you to good places',
    "life isn't perfect but your sneakers can be",
    "it's okay to be a little obsessed with shoes",
    'dream chasers wear sneakers',
    'life is short, buy the shoes',
    'life is too short to wear boring shoes',
    'Cinderella is proof that a new pair of shoes can change your life',
    'repeat after me: I deserve new sneakers',
    'if the shoe fits, buy it',
    "if I ever let my head down, it's to admire my shoes",
  ];
  const random = (Math.random() * quotes.length) | 0;
  return quotes[random];
};

const Home = () => {
  const quote = getQuote();
  return (
    <div className='home-container'>
      <div className='home-image'>
        <img src='images/promo-8.jpg' className='promo-image' alt='promo'/>
      </div>

      <div className='video-wrapper'>
        <HoverVideoPlayer videoSrc={Video} className='video' />
        <motion.h5
          className='video-text'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        >
          {quote}
        </motion.h5>
      </div>
      <Promo image={promo9} />
      <Collage />
      <Gallery />
    </div>
  );
};

export default Home;
