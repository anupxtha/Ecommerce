import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';

function NavBar() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const LoggedRouter = () => {
    return (
      <>
        <i className='fa-solid fa-telegram'></i>
      </>
    );
  };

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
          <Link href='/sells'>
            <a style={{ color: 'black' }}>
              <p>Sale</p>
            </a>
          </Link>
          <p>About</p>
        </div>
        <div className='search'>
          <input type='text' placeholder='search' />

          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className='icons'>
          {Object.keys(auth).length === 0 ? (
            <Link href='/login'>
              <a style={{ color: 'black' }}>
                <i className='fa-solid fa-user'></i>
              </a>
            </Link>
          ) : (
            LoggedRouter()
          )}

          <i className='fa-solid fa-heart'></i>
          <i className='fa-solid fa-cart-shopping'></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
