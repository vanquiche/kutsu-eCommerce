import React, { createContext } from 'react';

interface ShowCartType {
  showCart: boolean;
  setShowCart: React.Dispatch<boolean>;
}

export const ShowCartContext = createContext<ShowCartType>({
  showCart: false,
  setShowCart: () => {},
});
