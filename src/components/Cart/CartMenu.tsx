import React from 'react'
import { motion } from 'framer-motion';
import { GrFormClose } from 'react-icons/gr';
import './CartMenu.css';

const CartMenu = (props: {keyRef: string, onClose: () => void}) => {
  console.log('render cart');
  
  return (
    <motion.aside key={props.keyRef} initial={{scaleX: 0}} animate={{scaleX: 1}} exit={{scaleX: 0}}>
      <div className='grid-cart cart'>
         <button onClick={props.onClose}>
          <GrFormClose size='1.5em' />
        </button>
      </div>
      <div className='grid-overlay overlay' onClick={props.onClose}>

      </div>
    </motion.aside>
  )
}

export default CartMenu