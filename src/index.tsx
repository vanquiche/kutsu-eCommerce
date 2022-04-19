import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
