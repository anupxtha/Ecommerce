import React from 'react';
import NavBar from './NavBar';
import Notify from './Notify';

function Layout({ children }) {
  return (
    <div style={{ width: '100%', float: 'left' }}>
      <div
        className='navss'
        style={{
          position: 'sticky',
          top: '0',
          float: 'left',
          width: '100%',
          height: '70px',
          zIndex: 9999,
        }}
      >
        <NavBar />
      </div>
      <Notify />
      {children}
    </div>
  );
}

export default Layout;
