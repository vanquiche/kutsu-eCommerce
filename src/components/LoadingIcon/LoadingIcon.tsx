import { motion } from 'framer-motion';
import { BsDot } from 'react-icons/bs';
import './LoadingIcon.css';

const animateVariant = {
  initial: { opacity: 0.2 },
  animate: { opacity: 1 },

};

const DOTSIZE = '12.8px';

const LoadingIcon = () => {
  return (
    <div className='icon-container'>
      <motion.span
        className='icon'
        initial='initial'
        animate='animate'
        key={'1'}
        transition={{
          delay: 0,
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.4,
        }}
        variants={animateVariant}
      >
        <BsDot size={DOTSIZE} color='black' />
      </motion.span>
      <motion.span
        className='icon'
        initial='initial'
        animate='animate'
        key={'2'}
        transition={{
          delay: 0.25,
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.4,
        }}
        variants={animateVariant}
      >
        <BsDot size={DOTSIZE} color='black' />
      </motion.span>
      <motion.span
        className='icon'
        initial='initial'
        animate='animate'
        key={'3'}
        transition={{
          delay: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.4,
        }}
        variants={animateVariant}
      >
        <BsDot size={DOTSIZE} color='black' />
      </motion.span>
    </div>
  );
};

export default LoadingIcon;
