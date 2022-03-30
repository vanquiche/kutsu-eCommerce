import React from 'react'

import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaPinterestSquare} from 'react-icons/fa'
import {FaRedditSquare} from 'react-icons/fa'


// const socialLinks = [

// ]

const Social = () => {
  return (
    <div className='legal-container'>
      <FaInstagramSquare size='1.8em' className='social-icon' />
      <FaFacebookSquare size='1.8em'className='social-icon' />
      <FaTwitterSquare size='1.8em' className='social-icon' />
      <FaPinterestSquare size='1.8em' className='social-icon' />
      <FaRedditSquare size='1.8em' className='social-icon' />

    </div>
  )
}

export default Social