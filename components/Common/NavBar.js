import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';

function NavBar() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const LoggedRouter = () => {
    return (
      <div className="hoverImage">
        <div className="userImage">
          <img src="" alt="User Image" />
          <div className="dropImage">
            <p>Profile</p>
            <p>Logout</p>
          </div>
        </div>
        {/* <i className="fa-solid fa-telegram"></i> */}
      </div>
    );
  };

  return (
    <div className="navBar">
      <div className="innerNav">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/images/2BGamer.png" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="menu">
          <p>Shop</p>
          <Link href="/sells">
            <a style={{ color: 'black' }}>
              <p>Sale</p>
            </a>
          </Link>
          <p>About</p>
        </div>
        <div className="search">
          <input type="text" placeholder="search" />

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icons">
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          {Object.keys(auth).length === 0 ? (
            <Link href="/login">
              <a style={{ color: 'black', margin: '0' }}>
                <div className="profileIcon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="signinInfo">
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
