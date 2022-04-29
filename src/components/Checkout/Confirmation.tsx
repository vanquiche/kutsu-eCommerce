import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

interface Props {
  orderNumber: string;
}

const Confirmation: React.FC<Props> = ({ orderNumber }) => {
  return (
    <div className='confirmation-container'>
      <Link to='/' className='logo' style={{ margin: '1rem' }}>
        Kutsu
      </Link>
      <p>
        <b>{orderNumber}</b>
      </p>
      <p>Thank you for placing your order. We'll ship that out to as soon as your order is ready.</p>
    </div>
  );
};

export default Confirmation;
