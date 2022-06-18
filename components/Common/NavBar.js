import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';

function NavBar() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();
  const details = Object.keys(auth).length !== 0 && JSON.parse(auth);

  const handleLogout = () => {
    sessionStorage.removeItem('loginStatus');
    sessionStorage.removeItem('authToken');
    dispatch({ type: 'AUTH', payload: {} });
    return router.push('/');
  };

  const LoggedRouter = () => {
    return (
      <div className='hoverImage'>
        <div className='userImage'>
          <img
            src={'http://127.0.0.1:8000' + details.user_proifle.user_image}
            alt='pp'
            style={{ borderRadius: '50%', width: '36px', height: '36px' }}
          />
          <div className='dropImage'>
            <Link href='/profile'>
              <a style={{ color: 'black' }}>
                <p>Profile</p>
              </a>
            </Link>
            <p onClick={() => handleLogout()}>Logout</p>
          </div>
        </div>
        {/* <i className="fa-solid fa-telegram"></i> */}
      </div>
    );
  };

  return (
    <div className='navBar'>
      <div className='innerNav'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <img src='/images/2BGamer.png' alt='Logo' />
            </a>
          </Link>
        </div>
        <div className='menu'>
          <p>Category</p>
          <Link href='/sales'>
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
          <i className='fa-solid fa-heart'></i>
          <i className='fa-solid fa-cart-shopping'></i>
          {Object.keys(auth).length === 0 ? (
            <Link href='/login'>
              <a style={{ color: 'black', margin: '0' }}>
                <div className='profileIcon'>
                  <i className='fa-solid fa-user'></i>
                </div>
                <div className='signinInfo'>
                  <p>Namaste, </p>
                  <p>Sign In</p>
                </div>
              </a>
            </Link>
          ) : (
            LoggedRouter()
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
