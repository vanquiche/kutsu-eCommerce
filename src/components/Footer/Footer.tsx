import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Social from './Social';
import {BsChevronRight} from 'react-icons/bs'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import './Footer.css';

const legalLinks = [
  'Terms',
  'Privacy',
  'Accessibility',
  'Locations',
  'Careers',
]

const Footer = () => {
  // console.log('render footer')
  return (
    <footer className='container'>
      <div className='grid-container'>
        <section className='grid-newsletter'>
          {/* newsletter */}

          <div>
            <h5 className='signup-title'>
              Join the club and recieve 25% off your first purchase
            </h5>
            {/* <label htmlFor='email'>Email</label> */}
            <input
              className='input-email'
              name='email'
              type='email'
              placeholder='hello@friends.com'
            />
            <button className='input-button'>
              <BsChevronRight size='1em' color='white'/>
            </button>
          </div>
        </section>

        <section className='grid-contact'>
          {/* contact */}
          <h6>CALL OR TEXT</h6>
          <p>
            We'd love to engage in some good old fashioned conversation.
            Available M-F.
          </p>
          <BsFillTelephoneFill size='1.3em' className='contact-icon'/>
          <span>555 555 5555</span>
        </section>

        <section className='grid-chat'>
          {/* chat */}
          <h6>CHAT</h6>
          <p>
            Relive the glory days when instant messenger was king. Hit us with a
            “sup”.
          </p>
          <BsFillChatDotsFill size='1.3em' className='contact-icon'/>
          <span>let's chat</span>
        </section>

        <section className='grid-social'>
          <Social />
        </section>

        <section className='grid-copyright'>
          <ul className='legal-container'>

          {legalLinks.map(link => {
            return (
              <li key={uuidv4()}>{link}</li>
            )
          })}

          </ul>
        </section>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
