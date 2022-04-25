import React, { createContext } from 'react';
import {ProductType, Action} from '../types/Types'

interface CartContextType {
  state: ProductType[];
  dispatch: React.Dispatch<Action>;
}

export const CartContext = createContext<CartContextType>({
  state: [],
  dispatch: () => {},
});

