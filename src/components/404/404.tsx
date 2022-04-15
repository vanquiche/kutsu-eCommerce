import React from 'react';
import { Link } from 'react-router-dom';
import dog from '../../images/dog-404.png';
import './404.css';

const FourOFour = () => {
  return (
    <div className='page-container'>
      <div className='page-text-container'>
        <h5 className='page-title'>404: Page Not Found</h5>
        <p className='page-text'>It looks like this page got lost. The link below will help you find your way back.</p>
      </div>
        <Link to='/' className='page-link'>Kutsu</Link>
      <img src={dog} className='page-image' />
    </div>
  );
};

export default FourOFour;
