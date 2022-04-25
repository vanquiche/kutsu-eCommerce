import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MenuBtn from './MenuBtn';
import SubMenu from './SubMenu';
import MobileDropdown from './MobileDropdown';
import CartMenu from '../Cart/CartMenu';
import CartBtn from './CartBtn';
import { ShowCartContext } from '../../contexts/ShowCartContext';
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
    text: 'ABOUT',
    path: '/about',
  },
];

const Header = () => {
  const { showCart, setShowCart } = useContext(ShowCartContext);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const location = useLocation();

  const disableScroll = () => {
    return (document.body.style.overflowY = 'hidden');
  };

  const enableScroll = () => {
    return (document.body.style.overflowY = '');
  };

  const dismissDropdownMenu = () => {
    if (showDesktopMenu === true) setShowDesktopMenu(false);
    else return;
  };

  const openCartMenu = () => {
    setShowCart(true);
    disableScroll();
  };

  const closeCartMenu = () => {
    enableScroll();
    setShowCart(false);
  };

  const toggleMobileMenu = () => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
      enableScroll();
    } else {
      setShowMobileMenu(true);
      disableScroll();
    }
  };

  // navigating from mobile menu
  // closes menu without reseting scroll behavior
  // useEffect in place to reset when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      enableScroll();
    };
  }, [location]);

  return (
    <header>
      <nav>
        <MenuBtn onClick={toggleMobileMenu} state={showMobileMenu} />
        <Link
          className='grid-col-1 center logo'
          key={uuidv4()}
          onMouseEnter={dismissDropdownMenu}
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
                    : dismissDropdownMenu
                }
                to={link.path}
                tabIndex={index + 2}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        {!showMobileMenu && (
          <CartBtn
            handleClick={openCartMenu}
            handleMouseEnter={dismissDropdownMenu}
          />
        )}
      </nav>
      <AnimatePresence>
        {showDesktopMenu && (
          <SubMenu
            keyRef='desktop'
            onLeave={dismissDropdownMenu}
            indexStart={5}
          />
        )}
        {showMobileMenu && <MobileDropdown links={navlinks} keyRef='mobile' />}
        {showCart && <CartMenu keyRef='cart' onClose={closeCartMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default React.memo(Header);
