import React from 'react';

function Cart() {
  return (
    <div className='cart'>
      <div className='innerCart'>
        <div className='items'>
          <p className='title'>SHOPPING LIST</p>
          <div className='cartList'>
            <div className='cartImage'>
              <img src='' alt='' />
            </div>
            <div className='cartDetails'>
              <p>Cart title</p>
              <p>Price</p>
              <p>
                Color <span>One Color</span>
              </p>
              <p>
                Size <span>One Size</span>
              </p>
              <p>Quantity</p>
              <button className='cartBtn'>REMOVE</button>
            </div>
          </div>
          <div className='cartList'>
            <div className='cartImage'>
              <img src='' alt='' />
            </div>
            <div className='cartDetails'>
              <p>Cart title</p>
              <p>Price</p>
              <p>
                Color <span>One Color</span>
              </p>
              <p>
                Size <span>One Size</span>
              </p>
              <p>Quantity</p>
              <button className='cartBtn'>REMOVE</button>
            </div>
          </div>
          <div className='cartList'>
            <div className='cartImage'>
              <img src='' alt='' />
            </div>
            <div className='cartDetails'>
              <p>Cart title</p>
              <p>Price</p>
              <p>
                Color <span>One Color</span>
              </p>
              <p>
                Size <span>One Size</span>
              </p>
              <p>Quantity</p>
              <button className='cartBtn'>REMOVE</button>
            </div>
          </div>
        </div>
        <div className='summary'>
          <div className='innerSummary'>
            <p className='title'>ORDER SUMMARY</p>
            <p>
              Item Subtotal <span>Price</span>
            </p>
            <p>
              Delivery <span>Free</span>
            </p>
            <div className='underline'></div>
            <p>Estimated Total</p>

            <div className='buttons'>
              <button className='grayBtnPadding'>Proceed to checkout</button>
              {/* <button className="secondGrayBtn">Continue Shopping</button>  */}
            </div>
            <div className='buttons'>
              {/* <button className="grayBtn">Proceed to checkout</button>  */}
              <button className='secondGrayBtnPadding'>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
