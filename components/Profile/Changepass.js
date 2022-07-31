import React from 'react';

function Changepass() {
  return (
    <div className="changePass">
      <div className="innerChangepass">
        <div className="form">
          <label>Old Password</label>
          <input type="text" />
        </div>
        <div className="form">
          <label>New Password</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Changepass;
