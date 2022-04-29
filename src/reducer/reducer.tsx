import { ProductType, Action } from '../types/Types';

const saveState = (state: ProductType[]) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const addItem = (state: ProductType[], action: Action) => {
  if (state.some((product) => product.id === action.product?.id)) {
    return addQty(state, action);
  } else {
    const newState = [...state, Object.assign({}, action.product)];
    saveState(newState);
    return newState;
  }
};

const addQty = (state: ProductType[], action: Action) => {
  const newState = state.map((product) => {
    if (product.id === action.product!.id) {
      return { ...product, qty: product.qty + 1 };
    } else return product;
  });
  saveState(newState);
  return newState;
};

const subtractQty = (state: ProductType[], action: Action) => {
  const newState = state.map((product) => {
    if (product.id === action.product!.id) {
      return { ...product, qty: product.qty - 1 };
    } else return product;
  });
  saveState(newState);
  return newState;
};

const removeItem = (state: ProductType[], action: Action) => {
  const newState = state.filter((product) => {
    if (product.id !== action.product!.id) return product;
  });
  saveState(newState);
  return newState;
};

const deleteCart = () => {
  const newState: ProductType[] = [];
  saveState(newState);
  return newState;
};

export const reducer = (
  state: ProductType[],
  action: Action
): ProductType[] => {
  switch (action.type) {
    case 'increment':
      return addQty(state, action);
    case 'decrement':
      return subtractQty(state, action);
    case 'add item':
      return addItem(state, action);
    case 'remove item':
      return removeItem(state, action);
    case 'delete cart':
      return deleteCart();
    default:
      return state;
  }
};
