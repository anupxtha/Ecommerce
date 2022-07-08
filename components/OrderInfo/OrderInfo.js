import React from 'react';

function OrderInfo() {
  return (
    <>
      {/* {orderDetailsProduct && ( */}
      <div className='orderDetails'>
        <div className='innerorderDetails'>
          <div className='items'>
            <p className='title'>Order Details</p>
            <div className='tableTitle'>
              <div className='producDetail'>
                <p>Items</p>
              </div>

              <div className='price'>
                <p>price</p>
              </div>
              <div className='quantity'>
                <p>Quantity</p>
              </div>
            </div>

            <div className='orderDetailsSecondList'>
              <div className='producDetail'>
                <input type='checkbox' style={{ marginRight: '20px' }} />
                <div className='productImg'>
                  <img src='' alt='Product image' />
                </div>
                <div className='titles'>
                  <p style={{ marginBottom: '10px' }}>title</p>
                  <p>
                    Color: <span>Red</span>
                  </p>
                  <p>
                    Size: <span>L</span>
                  </p>
                </div>
              </div>

              <div className='price'>
                <p>price</p>
                <p>
                  <s>price</s>
                </p>
                <i class='fa-solid fa-trash-can'></i>
              </div>
              <div className='quantity'>
                Qty : &nbsp;
                <span className='count'>2</span>
              </div>
            </div>
          </div>
          <div className='summary'>
            <div className='innerSummary'>
              <p className='title'>Shipping Address</p>
              <div className='address'>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
              </div>
              <p className='title'>ORDER SUMMARY</p>
              <p>
                Item Subtotal <span>Price</span>
              </p>
              <p>
                Delivery <span>Free</span>
              </p>
              <div className='voucher'>
                <input type='text' placeholder='Enter Voucher Code' />
                <button className='btn btn-success'>Apply</button>
              </div>
              {/* <div className="underline"></div> */}
              <p style={{ marginTop: '10px' }}>
                Estimated Total <span>Total</span>
              </p>

              <div className='buttons'>
                <button className='grayBtnPadding'>Proceed to Payout</button>
              </div>
              <div className='buttons'></div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default OrderInfo;
