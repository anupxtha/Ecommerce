import React, { useState } from 'react';
import CustomerInfo from './CustomerInfo';

function Profile() {
  const [toogle, setToogle] = useState(0);
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
            Return Requests
          </p>
          <p
            className={toogle === 3 ? 'active' : ''}
            onClick={() => setToogle(3)}
          >
            Address Book
          </p>
          <p
            className={toogle === 4 ? 'active' : ''}
            onClick={() => setToogle(4)}
          >
            Change Password
          </p>
          <p
            className={toogle === 5 ? 'active' : ''}
            onClick={() => setToogle(5)}
          >
            Logout
          </p>
        </div>
        {toogle === 0 && <CustomerInfo />}
      </div>
    </div>
  );
}

export default Profile;
