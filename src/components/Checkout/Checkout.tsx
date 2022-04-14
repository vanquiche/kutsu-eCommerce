import { useState, useContext, useRef } from 'react';
import { Dinero, dinero, add, multiply, subtract, toUnit } from 'dinero.js';
import { USD } from '@dinero.js/currencies';
import useDinero from '../../hooks/useDinero';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';

const promoCodes = {
  '10%OFF': 10,
  '15%OFF': 15,
  $20OFF: 2000,
  $35OFF: 3500,
};

const Checkout = () => {
  const { state } = useContext(CartContext);

  const [promo, setPromo] = useState<string | null>(null);
  const [selectedPromo, setSelectedPromo] = useState('');
  const [total, setTotal] = useState<string | null>(null);
  const [code, setCode] = useState('');

  const { sum: subTotal } = useDinero(state);
  // initial taxrate without promo
  const taxRate = multiply(subTotal, { amount: 1025, scale: 4 });
  const taxRate_format = toUnit(taxRate).toFixed(2);
  const [tax, setTax] = useState<string | null>(taxRate_format);

  const inputRef = useRef<HTMLInputElement>(null);

  const getTotal = (initial: Dinero<number>, value: Dinero<number>) => {
    const total = subtract(initial, value);
    const tax = multiply(total, { amount: 1025, scale: 4 });
    const addTax = add(total, tax);
    const tax_format = toUnit(tax).toFixed(2);
    const total_format = toUnit(addTax).toFixed(2);
    setTax(tax_format);
    setTotal(total_format);
  };

  const getDiscount = (promo: string, e: React.FormEvent) => {
    e.preventDefault();
    for (const [key, val] of Object.entries(promoCodes)) {
      if (key === promo) {
        // calculate percentages operation
        if (val < 100) {
          const percentage = multiply(subTotal, { amount: val, scale: 2 });
          setPromo(toUnit(percentage).toFixed(2));
          getTotal(subTotal, percentage);
          setSelectedPromo(key);
        }
        // calculate dollar operation
        if (val > 100) {
          const dollar = dinero({ amount: val, currency: USD });
          setPromo(toUnit(dollar).toFixed(2));
          getTotal(subTotal, dollar);
          setSelectedPromo(key);
        }
      }
    }
    // reset promo code field
    setCode('');
    // remove focus from input field
    inputRef.current?.blur();
  };

  return (
    <div className='checkout-wrapper'>
      <Link to='/'>
        <button className='add-btn primary-btn'>CONTINUE SHOPPING</button>
      </Link>

      <div className='checkout-item-list'>
        <h5 className='checkout-order-title checkout-col-2'>ORDER SUMMARY</h5>

        {state.map((product) => {
          return <CheckoutItem product={product} />;
        })}

        <div className='checkout-item divider'>
          <p className='checkout-col-2 promo-codes'>
            <i>$20OFF, $35OFF, 10%OFF, 15%OFF</i>
          </p>
        </div>

        <form className='checkout-item' onSubmit={(e) => getDiscount(code, e)}>
          <p className='checkout-col-2'>PROMOTION</p>
          <input
            className='checkout-col-3 checkout-code'
            ref={inputRef}
            type='text'
            placeholder='code'
            maxLength={9}
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
          />
          <button
            type='submit'
            className='checkout-col-4 checkout-code-btn'
            disabled={code.length > 4 ? false : true}
          >
            APPLY
          </button>
        </form>

        <div className='checkout-item'>
          <p className='checkout-col-2'>SUBTOTAL</p>
          <p className='checkout-col-4 item-price'>
            ${toUnit(subTotal).toFixed(2)}
          </p>
        </div>

        <div className='checkout-item'>
          <p className='checkout-col-2'>DISCOUNT</p>
          <p className='checkout-col-3'>{selectedPromo}</p>
          <p className='checkout-col-4 item-price'>
            {promo === null ? ' - ' : `- $${promo}`}
          </p>
        </div>

        <div className='checkout-item'>
          <p className='checkout-col-2'>TAX</p>
          <p className='checkout-col-3'>10.25%</p>
          <p className='checkout-col-4 item-price'>${tax}</p>
        </div>

        <div className='checkout-item'>
          <p className='checkout-col-2'>TOTAL</p>
          <p className='checkout-col-4 item-price'>
            ${total || toUnit(add(subTotal, taxRate)).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
