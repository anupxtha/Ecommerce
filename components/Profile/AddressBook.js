import React from 'react';

function AddressBook() {
  return (
    <div className="addressBook">
      <div className="innerAddress">
        <p>Adress Book</p>
        <div className="form">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className="form">
          <label>Phone Number:</label>
          <input type="text" />
        </div>
        <div className="form">
          <label>Email:</label>
          <input type="text" />
        </div>
        <div className="form">
          <label>Address:</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default AddressBook;
