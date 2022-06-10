import React from 'react';

function EmailNotification() {
  return (
    <div className='emailNotification'>
      <p>Join us for the latest updates, special offers and more.</p>
      <div className='email'>
        <input style={{ color: 'White' }} type='text' placeholder='Email' />
        <i className='fa-solid fa-arrow-right'></i>
      </div>
    </div>
  );
}

export default EmailNotification;
