import { motion } from 'framer-motion';
import { BsDot } from 'react-icons/bs';
import './LoadingIcon.css';

const animateVariant = {
  initial: { scale: 1 },
  animate: { scale: 2.5 },
};

const DOTSIZE = '.8rem';

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
