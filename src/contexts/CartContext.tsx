import React, { createContext } from 'react';

export interface Product {
  id: string;
  item: string;
  qty: number;
  price: number;
  image?: string;
}

interface CartContextType {
  state: Product[];
  dispatch: React.Dispatch<Action>;
}

export type Action = {
  type: 'increment' | 'decrement' | 'add item' | 'remove item';
  product?: Product;
};

export const initialState = [];

export const CartContext = createContext<CartContextType>({
  state: initialState,
  dispatch: () => {},
});

export const reducer = (state: Product[], action: Action): Product[] => {
  switch (action.type) {
    case 'increment':
      return state.map((product) => {
        if (product.id === action.product!.id) {
          return { ...product, qty: product.qty + 1 };
        } else return product;
      });
    case 'decrement':
      return state.map((product) => {
        if (product.id === action.product!.id) {
          return { ...product, qty: product.qty - 1 };
        } else return product;
      });
    case 'add item':
      return [...state, Object.assign({}, action.product)]
    case 'remove item':
      return state.filter((product) => {
        if (product.id !== action.product!.id) {
          return product;
        }
      });
    default:
      // throw new Error();
      return state;
  }
};
