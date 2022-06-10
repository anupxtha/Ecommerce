import React from 'react';
import NavBar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
