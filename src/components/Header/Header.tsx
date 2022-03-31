import React, { useState, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BsFillBagFill } from 'react-icons/bs';
import MenuBtn from './MenuBtn';
import SubMenu from './SubMenu';
import './Header.css';
import MobileDropdown from './MobileDropdown';
import CartMenu from '../Cart/CartMenu';

const navlinks = [
  {
    text: 'shop',
    path: '/shop',
  },
  {
    text: 'workshop',
    path: '/workshop',
  },
  {
    text: 'sale',
    path: '/sale',
  },
];

const Header = () => {
  console.log('render header');
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMenu = () => {
    if (showDesktopMenu === true) setShowDesktopMenu(false);
    else return;
  };

  const closeCartMenu = () => {
    // setShowMobileMenu(false);
    setShowCartMenu(false);
  };

  return (
    <>
      <header>
        <nav>
          <MenuBtn
            onClick={() => setShowMobileMenu((state) => !state)}
            state={showMobileMenu}
          />
          <Link
            className='grid-col-1 center logo'
            key={uuidv4()}
            onMouseEnter={closeMenu}
            to='/'
            tabIndex={1}
          >
            Kutsu
          </Link>

          <div className='grid-col-2 nav-link-group start'>
            {navlinks.map((link, index) => {
              return (
                <Link
                  className='nav-link'
                  key={uuidv4()}
                  onMouseEnter={
                    link.text === 'shop'
                      ? () => setShowDesktopMenu(true)
                      : closeMenu
                  }
                  to={link.path}
                  tabIndex={index + 2}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>

          <span className='grid-col-3'>
            <button
              tabIndex={5}
              onClick={() => setShowCartMenu(true)}
              onMouseEnter={closeMenu}
            >
              <BsFillBagFill size='1.2em' />
            </button>
          </span>
        </nav>
      </header>
      <AnimatePresence>
        {showDesktopMenu && (
          <SubMenu keyRef='desktop' onLeave={closeMenu} indexStart={5} />
        )}
        {showMobileMenu && <MobileDropdown links={navlinks} keyRef='mobile' />}
        {showCartMenu && <CartMenu keyRef='cart' onClose={closeCartMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
