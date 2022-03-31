import React, { createContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

type Action = 'increment' | 'decrement';
type Cart = { cart: number };

interface CartContextType {
  state: Cart;
  dispatch: React.Dispatch<Action>;
}

const initialState = { cart: 0 };

export const CartContext = createContext<CartContextType>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: Cart, action: Action) => {
  switch (action) {
    case 'increment':
      return { cart: state.cart + 1 };
    case 'decrement':
      return { cart: state.cart - 1 };
    default:
      // throw new Error();
      return state;
  }
};

function App() {
  console.log('render App');

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        {/* <Route /> */}
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
