import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';

function NavBar() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

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
          <img src='' alt='pp' />
          <div className='dropImage'>
            <p>Profile</p>
            <button onClick={handleLogout}>
              <p>Logout</p>
            </button>
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
