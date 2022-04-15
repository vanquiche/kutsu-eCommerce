import { useMemo } from 'react';
import { ProductType } from '../types/Types';
import { dinero, add, subtract } from 'dinero.js';
import { USD } from '@dinero.js/currencies';

const useDinero = (cart: ProductType[]) => {
  const initialValue = dinero({ amount: 0, currency: USD });

  const products = useMemo(() => {
    let items: any[] = [];
    cart.forEach((product) => {
      const d = dinero({ amount: product.price * product.qty, currency: USD });
      items.push(d);
    });
    return items;
  }, [cart]);

  const addition = (addends: any) => addends.reduce(add, initialValue);

   const subtraction = (addends: any) => addends.reduce(subtract, initialValue);

  const sum = addition(products);
  const difference = subtraction(products);

  return { sum, difference };
};

export default useDinero;
