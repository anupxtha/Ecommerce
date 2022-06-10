import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <div className='navBar'>
      <div className='innerNav'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <img src='/images/LEGO.png' alt='Logo' />
            </a>
          </Link>
        </div>
        <div className='menu'>
          <p>Shop</p>
          <p>Sale</p>
          <p>About</p>
        </div>
        <div className='search'>
          <input type='text' placeholder='search' />

          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className='icons'>
          <i className='fa-solid fa-user'></i>
          <i className='fa-solid fa-heart'></i>
          <i className='fa-solid fa-cart-shopping'></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
