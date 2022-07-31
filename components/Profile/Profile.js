import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { DataContext } from '../../store/GlobalState';
import AddressBook from './AddressBook';
import Changepass from './Changepass';
import CustomerInfo from './CustomerInfo';

function Profile() {
  const [toogle, setToogle] = useState(0);
  const [state, dispatch] = useContext(DataContext);
  const router = useRouter();
  const handleLogout = () => {
    sessionStorage.removeItem('loginStatus');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('cartProduct');
    dispatch({ type: 'AUTH', payload: {} });
    dispatch({ type: 'ADD_CART', payload: [] });
    dispatch({ type: 'ADD_WISHLIST', payload: [] });
    return router.push('/');
  };
  return (
    <div className="mainProfile">
      <div className="innerProfile">
        <div className="tabs">
          <p
            className={toogle === 0 ? 'active' : ''}
            onClick={() => setToogle(0)}
          >
            Customer Info
          </p>
          <p
            className={toogle === 1 ? 'active' : ''}
            onClick={() => setToogle(1)}
          >
            Order List
          </p>
          <p
            className={toogle === 2 ? 'active' : ''}
            onClick={() => setToogle(2)}
          >
            Address Book
          </p>
          <p
            className={toogle === 3 ? 'active' : ''}
            onClick={() => setToogle(3)}
          >
            Change Password
          </p>
          <p className={toogle === 4 ? 'active' : ''} onClick={handleLogout}>
            Logout
          </p>
        </div>
        {toogle === 0 && <CustomerInfo />}
        {toogle === 2 && <AddressBook />}
        {toogle === 3 && <Changepass />}
      </div>
    </div>
  );
}

export default Profile;
