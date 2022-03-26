import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';

function App() {
  // home page
  // checkout page
  // product page by id
  // const location = useLocation()

  return (
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        {/* <Route /> */}
      </Routes>
     );
}

export default App;
