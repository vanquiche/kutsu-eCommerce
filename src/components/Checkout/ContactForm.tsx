import React from 'react';

const ContactForm = () => {
  return (
    <form className='contact-form'>
      <h5 className='checkout-order-title' style={{textAlign: 'center'}}>SHIPPING INFORMATION</h5>
      <label htmlFor='firstName'>First Name</label>
      <input type='text' name='firstName' value='John' readOnly={true} />
      <label htmlFor='lastName'>Last Name</label>
      <input type='text' name='lastName' value='Smith' readOnly={true} />
      <label htmlFor='customerEmail'>Email</label>
      <input
        type='email'
        name='customerEmail'
        value='johnsmith@gmail.com'
        readOnly={true}
      />
      <label htmlFor='customerAddress'>Address</label>
      <input
        type='text'
        name='customerAddress'
        value='1234 Market St. Place'
        readOnly={true}
      />
      <label htmlFor='addressUnit'>Unit</label>
      <input type='text' name='addressUnit' value='Apt. #6C' readOnly={true} />
      <label htmlFor='addressCity'>City</label>
      <input type='text' name='addressCity' value='Seattle' readOnly={true} />
      <label htmlFor='addressState'>State</label>
      <select name='addressState' disabled={true}>
        <option value='washington'>WA</option>
      </select>
      <label htmlFor='addressZipcode'>Zipcode</label>
      <input type='text' name='addressZipcode' value='98104' readOnly={true} />
    </form>
  );
};

export default ContactForm;
