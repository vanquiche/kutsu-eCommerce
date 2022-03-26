import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <section>
        {/* newsletter */}
      <h4>Sign up for our newsletter</h4>
      <label htmlFor='email'>Email</label>
      <input name='email' type='email' placeholder='hello@email.com' />
      </section>

      <section>{/* contact */}</section>

      <section>{/* chat */}</section>

      <section>{/* social */}</section>
    </footer>
  );
};

export default Footer;
