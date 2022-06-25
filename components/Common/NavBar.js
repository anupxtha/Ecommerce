import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';

function NavBar() {
  const [state, dispatch] = useContext(DataContext);
  const { auth, cart, wishlist } = state;
  const router = useRouter();
  const details = Object.keys(auth).length !== 0 && auth;

  const handleLogout = () => {
    sessionStorage.removeItem('loginStatus');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('cartProduct');
    dispatch({ type: 'AUTH', payload: {} });
    dispatch({ type: 'ADD_CART', payload: [] });
    dispatch({ type: 'ADD_WISHLIST', payload: [] });
    return router.push('/');
  };

  const LoggedRouter = () => {
    return (
      <div className='hoverImage'>
        <div className='userImage'>
          <img
            src={
              details.user_proifle.get_image
                ? 'http://127.0.0.1:8000' + details.user_proifle.get_image
                : '/images/LEGO.png'
            }
            alt='pp'
            style={{ borderRadius: '50%', width: '36px', height: '36px' }}
          />
          <div className='dropImage'>
            <div className='innerDropImage'>
              <Link href='/profile'>
                <p style={{ color: 'black' }}>Profile</p>
              </Link>
              <p onClick={() => handleLogout()}>Logout</p>
            </div>
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
          <div className='catDropDown'>
            <div className='heading'>
              <p>Category</p>
            </div>
            <div className='innerCategoryDrop'>
              <div className='first'>
                <p className='catTitle'>Title</p>
                <p>Name</p>
                <p>name</p>
                <p>Name</p>
                <p>name</p>
                <p>Name</p>
                <p>name</p>
              </div>
              <div className='first'>
                <p className='catTitle'>Title</p>
                <p>Name</p>
                <p>name</p>
              </div>
              <div className='first'>
                <p className='catTitle'>Title</p>
                <p>Name</p>
                <p>name</p>
              </div>
              <div className='first'>
                <p className='catTitle'>Title</p>
                <p>Name</p>
                <p>name</p>
              </div>
              <div className='first'>
                <p className='catTitle'>Title</p>
                <p>Name</p>
                <p>name</p>
              </div>
              <div className='first'>
                <p className='catTitle'>Title</p>
                <p>Name</p>
                <p>name</p>
              </div>
            </div>
          </div>
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
          <Link href='/wishlist'>
            <a style={{ color: 'black' }}>
              <i
                className='fa-solid fa-heart'
                style={{ position: 'relative', marginTop: '25px' }}
              >
                <span>{wishlist.length}</span>
              </i>
            </a>
          </Link>
          <Link href='/cart'>
            <a style={{ color: 'black' }}>
              <i
                className='fa-solid fa-cart-shopping'
                style={{ position: 'relative', marginTop: '25px' }}
              >
                <span>{cart.length}</span>
              </i>
            </a>
          </Link>
          {Object.keys(auth).length === 0 ? (
            <Link href='/login'>
              <a style={{ color: 'black', margin: '0' }}>
                <div className='profileIcon'>
                  <i className='fa-solid fa-user'></i>
                </div>

                <div className='signinInfo'>
                  <p>
                    Namaste, <br />
                    Sign In
                  </p>
                </div>
                {/* <p></p> */}
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
