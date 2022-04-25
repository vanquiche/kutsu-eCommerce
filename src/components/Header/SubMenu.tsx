import React from 'react';
import { motion } from 'framer-motion';
import ListImgs from './ListImgs';

const SubMenu = (props: { onLeave?: () => void; keyRef: string, indexStart: number }) => {
  return (
    <motion.div
      key={props.keyRef}
      className='sub-menu'
      onMouseLeave={props.onLeave}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, opacity: 0, transition: { delay: 0.25 } }}
    >
      <ListImgs tabIndexStart={props.indexStart}/>
    </motion.div>
  );
};

export default React.memo(SubMenu);
