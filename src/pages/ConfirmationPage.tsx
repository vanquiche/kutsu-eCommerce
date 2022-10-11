import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Confirmation from '../components/Checkout/Confirmation';

const ConfirmationPage = () => {
  const location = useLocation();
  const { orderNumber }: any = location.state;

  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    return () => {
      dispatch({ type: 'delete cart' });
    };
  }, [dispatch]);
  return <Confirmation orderNumber={orderNumber} />;
};

export default ConfirmationPage;
