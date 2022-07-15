import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';

function ShippingAddress() {
  const [state, dispatch] = useContext(DataContext);
  const initialState = { name: '', number: '', email: '', address: '' };
  const [locationData, setLocationData] = useState(initialState);
  const { cart, auth, wishlist, selected_items } = state;
  const router = useRouter();
  const [total, setTotal] = useState(0);

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
            <p>Add Shipping Address</p>
            <form action=''>
              <div className='shippForm'>
                <div className='innerShipForm'>
                  <label>Full Name</label>
                  <br />
                  <input type='text' name='name' />
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
                  <input type='text' name='number' />
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
                  <input type='email' name='email' />
                </div>
                <div className='innerShipForm'>
                  <label>Address</label>
                  <br />
                  <input type='text' name='address' />
                </div>
              </div>
              <div className='shippBtn'>
                <button className='btn btn-success'> Save</button>
                <button className='btn btn-danger'>Cancel</button>
              </div>
            </form>
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
              <div className='voucher'>
                <input type='text' placeholder='Enter Voucher Code' />
                <button className='btn btn-success'>Apply</button>
              </div>
              <div className='underline'></div>
              <p>
                Estimated Total{' '}
                <span>
                  Rs. {''}
                  {total}
                </span>
              </p>

              <div className='buttons'>
                <button disabled> Proceed to checkout </button>
              </div>
              <div className='buttons'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;