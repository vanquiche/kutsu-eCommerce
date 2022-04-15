import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MenuBtn from './MenuBtn';
import SubMenu from './SubMenu';
import MobileDropdown from './MobileDropdown';
import CartMenu from '../Cart/CartMenu';
import CartBtn from './CartBtn';
import './Header.css';

const navlinks = [
  {
    text: 'SHOP',
    path: '/shop',
  },
  {
    text: 'WORKSHOP',
    path: '/workshop',
  },
  {
    text: 'SALE',
    path: '/sale',
  },
];

const Header = () => {
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    if (showDesktopMenu === true) setShowDesktopMenu(false);
    else return;
  };
  const openCartMenu = () => {
    setShowCartMenu(true);
    document.body.style.overflowY = 'hidden';
  };
  const closeCartMenu = () => {
    document.body.style.overflowY = '';
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
                    link.text === 'SHOP' && location.pathname !== '/shop'
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
        <AnimatePresence>
          {showDesktopMenu && (
            <SubMenu keyRef='desktop' onLeave={closeMenu} indexStart={5} />
          )}
          {showMobileMenu && (
            <MobileDropdown links={navlinks} keyRef='mobile' />
          )}
          {showCartMenu && <CartMenu keyRef='cart' onClose={closeCartMenu} />}
        </AnimatePresence>
      </header>
    </>
  );
};

export default React.memo(Header);
