import React from 'react';

function CustomerInfo() {
  return (
    <div className="mainCustomerInfo">
      <p>Your Personal Details</p>
      <div className="form">
        <div className="innerForm">
          <label>
            First Name: <span className="required">*</span>
          </label>
          <br />
          <input type="text" name="fname" />
        </div>
        <div className="innerForm">
          <label>
            Last Name: <span className="required">*</span>
          </label>
          <br />
          <input type="text" name="fname" />
        </div>
        <div className="innerForm full">
          <label>
            Email: <span className="required">*</span>
          </label>
          <br />
          <input type="text" name="fname" />
        </div>
        <div className="innerForm">
          <label>
            Phone Number: <span className="required">*</span>
          </label>
          <br />
          <input type="text" name="fname" />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
