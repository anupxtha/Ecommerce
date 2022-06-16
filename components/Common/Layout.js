import React from 'react';
import NavBar from './Navbar';
import Notify from './Notify';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <Notify />
      {children}
    </div>
  );
}

export default Layout;
