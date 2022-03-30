import React, {useState, createContext} from 'react'

interface ContextType {
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
}

export const defaultValue = {cart: 0, setCart: () => {}}

export const CartContext = createContext<ContextType>(defaultValue)