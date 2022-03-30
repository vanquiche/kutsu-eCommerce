import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLink {
  text: string;
  path: string;
}

const MobileDropdown = (props: { links: NavLink[]; keyRef: string }) => {
  // console.log('render mobile dropdown')
  return (
    <motion.ul
      key={props.keyRef}
      className='mobile-menu-container'
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      {props.links.map((link) => {
        return (
          <li key={uuidv4()} className='mobile-menu-link' >
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default MobileDropdown;
