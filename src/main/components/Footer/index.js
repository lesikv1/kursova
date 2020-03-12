import React from 'react'

import './index.css'

export default function Footer() {
  return (
    <div className='footer column'>
      <p className='text-footer'>ХОЧЕШ ДIЗНАВАТИСЯ ПРО НОВI МОЖЛИВОСТI ПЕРШИМ?</p>
      <div className="ui inverted input div-subscribe-email">
        <input className='input-subscribe-email' type="text" placeholder="Search..." />
      </div>
      <button className="medium ui button subscribe margin">пiдписатися!</button>
    </div>
  );
}
