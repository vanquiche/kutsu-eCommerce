import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence } from 'framer-motion';
import SubMenu from './SubMenu';
import './Header.css';

const navlinks = [
  {
    text: 'Kutsu',
    path: '/',
    group: false,
    showMenu: false,
    links: [],
  },
  {
    text: null,
    path: null,
    group: true,
    showMenu: false,
    links: ['shop', 'workshop', 'sale'],
  },
  {
    text: 'Cart',
    path: null,
    group: false,
    links: [],
  },
];

const Header = () => {
  // console.log('render header');

  const [subMenuActive, setSubMenuActive] = useState(false);

  const closeMenu = () => {
    if (subMenuActive === true) setSubMenuActive(false);
    else return;
  }

  return (
    <>
      <header>
        <nav>
          {navlinks.map((link, index) => {
            if (link.path === '/') {
              return (
                <ul className='logo center' key={uuidv4()}>
                  <li
                    className='logo-text'
                    key={uuidv4()}
                    onMouseEnter={closeMenu}
                  >
                    {link.text}
                  </li>
                </ul>
              );
            }
            if (link.group === true) {
              return (
                <ul key={uuidv4()} className='col-1 spread'>
                  {link.links.map((item) => {
                    if (item === 'shop') {
                      return (
                        <li
                          key={uuidv4()}
                          onMouseEnter={() => setSubMenuActive(true)}
                        >
                          {item}
                        </li>
                      );
                    } else
                      return (
                        <li key={uuidv4()} onMouseEnter={closeMenu}>
                          {item}
                        </li>
                      );
                  })}
                </ul>
              );
            } else
              return (
                <ul key={uuidv4()} className='col-3 end'>
                  <li key={uuidv4()} onMouseEnter={closeMenu}>
                    {link.text}
                  </li>
                </ul>
              );
          })}
        </nav>
      </header>
      <AnimatePresence>
        {subMenuActive && <SubMenu keyRef='menu' onLeave={closeMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
