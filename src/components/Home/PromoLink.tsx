import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

interface Props {
  path: string;
  text: string;
  display: boolean;
}

const PromoLink: React.FC<Props> = ({ path, text, display }) => {
  return (
    <Link to={path} className={`promo-link ${display ? 'show-btn' : ''}`}>
      {text}
    </Link>
  );
};

export default React.memo(PromoLink);
