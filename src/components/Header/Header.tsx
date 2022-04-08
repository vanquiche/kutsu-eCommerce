import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BsFillBagFill } from 'react-icons/bs';
import MenuBtn from './MenuBtn';
import SubMenu from './SubMenu';
import './Header.css';
import MobileDropdown from './MobileDropdown';
import CartMenu from '../Cart/CartMenu';
import { CartContext } from '../../contexts/CartContext';
import CartBtn from './CartBtn';

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
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMenu = () => {
    if (showDesktopMenu === true) setShowDesktopMenu(false);
    else return;
  };
  const openCartMenu = () => {
    setShowCartMenu(true);
    document.body.style.overflowY = 'hidden';
  };
  const closeCartMenu = () => {
    document.body.style.overflowY = 'scroll';
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
          <CartBtn handleClick={openCartMenu} handleMouseEnter={closeMenu} />
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

export default React.memo(Header);
