import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';
import { validAddressDetails } from '../../utils/valid';
import apiServices from '../../utils/apiServices';
import Link from 'next/link';

function ShippingAddress() {
  const [state, dispatch] = useContext(DataContext);
  const initialState = { name: '', phone: '', email: '', address: '' };
  const [addressData, setAddressData] = useState(initialState);
  const { cart, auth, wishlist, selected_items } = state;
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errMsg = validAddressDetails(
      addressData.name,
      addressData.phone,
      addressData.email,
      addressData.address
    );

    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    apiServices
      .shippingAddressDetails(addressData)
      .then(response => {
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'Address Details is added' },
        });
        setShow(true);
        // console.log(response.data);
      })
      .catch(err => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem('authToken') === null) {
      return router.push('/login');
    }
  }, [auth, cart, wishlist, selected_items]);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('selectedItems')).length <= 0) {
      dispatch({
        type: 'NOTIFY',
        payload: { error: 'Please Select Product From Cart' },
      });
      return router.push('/cart');
    }
  }, []);

  return (
    <>
      <div className='mainShippingAddress'>
        <div className='innerMainShipping'>
          <div className='innerDetails'>
            {show ? (
              <h1>Successfully Save</h1>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className='shippForm'>
                  <div
                    style={{
                      width: '80%',
                      float: 'left',
                      marginBottom: '10px',
                    }}
                  >
                    <p style={{ paddingLeft: '0' }}>Add Shipping Address</p>
                  </div>
                  <div className='innerShipForm'>
                    <label>Full Name</label>
                    <br />
                    <input
                      type='text'
                      name='name'
                      value={addressData.name}
                      onChange={handleChangeInput}
                    />
                  </div>
                  {/* <div className='innerShipForm'>
                <label>Region</label>
                <br />
                <select name='region' id=''>
                  <option value='ss'>ss</option>
                </select>
              </div> */}
                  <div className='innerShipForm'>
                    <label>Phone Number</label>
                    <br />
                    <input
                      type='text'
                      name='phone'
                      value={addressData.phone}
                      onChange={handleChangeInput}
                    />
                  </div>
                  {/* <div className='innerShipForm'>
                <label>City</label>
                <br />
                <select name='city' id=''>
                  <option value='dd'>dd</option>
                </select>
              </div> */}
                  {/* <div className='innerShipForm'>
                <label>Building/ House No/ Floor/ Street</label>
                <br />
                <input type='text' name='building' />
              </div>
              <div className='innerShipForm'>
                <label>Area</label>
                <br />
                <select name='area' id=''>
                  <option value='dd'>dd</option>
                </select>
              </div> */}
                  <div className='innerShipForm'>
                    {/* <label>Colony/ Suburb/ Locality/ Landmark</label> */}
                    <label>Email</label>
                    <br />
                    <input
                      type='email'
                      name='email'
                      value={addressData.email}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className='innerShipForm'>
                    <label>Address</label>
                    <br />
                    <input
                      type='text'
                      name='address'
                      value={addressData.address}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className='shippBtn'>
                  <button type='submit' className='btn btn-success'>
                    {' '}
                    Save
                  </button>
                  <button className='btn btn-danger' type='reset'>
                    Clear
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className='summary'>
            <div className='innerSummary'>
              <p className='title'>ORDER SUMMARY</p>
              <p>
                Subtotal ( {selected_items.length} ){' '}
                <span>
                  Rs. {''}
                  {selected_items.map(item => {
                    total += parseInt(
                      item.quantity * item.item.get_discounted_price
                    );
                  })}
                  {total}
                </span>
              </p>
              <p>
                Delivery <span>Rs. 100</span>
              </p>
              {/* <div className='voucher'>
                <input type='text' placeholder='Enter Voucher Code' />
                <button className='btn btn-success'>Apply</button>
              </div> */}
              {'-------------------------------------------------------------'}
              <br />
              <br />
              <div className='underline'></div>
              <p>
                Estimated Total{' '}
                <span>
                  Rs. {''}
                  {total}
                </span>
              </p>

              <br />
              <br />
              <br />

              {show ? (
                <div className='buttons'>
                  <Link href='/orderdetails'>
                    <a>
                      <button> Proceed to checkout </button>
                    </a>
                  </Link>
                </div>
              ) : (
                <div className='buttons'>
                  <button disabled> Proceed to checkout </button>
                </div>
              )}
              <div className='buttons'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
