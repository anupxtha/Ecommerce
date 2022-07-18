import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../store/GlobalState';

function OrderInfo() {
  const [state, dispatch] = useContext(DataContext);
  const { selected_items } = state;
  const [totalPrice, setTotalPrice] = useState([]);
  console.log(totalPrice);

  const tprice =
    selected_items &&
    selected_items.map((newData) => newData.item.product_price);
  console.log(tprice);
  console.log(selected_items);

  return (
    <>
      {/* {orderDetailsProduct && ( */}
      <div className="orderDetails">
        <div className="innerorderDetails">
          <div className="items">
            <p
              className="title"
              style={{ marginBottom: '0', paddingTop: '20px' }}
            >
              Order Details
            </p>
            <div className="tableTitle">
              <div className="producDetail">
                <p>Items</p>
              </div>

              <div className="price">
                <p>price</p>
              </div>
              <div className="quantity">
                <p>Quantity</p>
              </div>
            </div>

            <div className="allItems">
              {selected_items && (
                <div className="orderDetailsSecondList">
                  {selected_items.map((newData) => {
                    const { product_price } = newData.item;

                    return (
                      <>
                        <div className="producDetail">
                          {/* <input type='checkbox' style={{ marginRight: '20px' }} /> */}
                          <div className="productImg">
                            <img
                              src={
                                'http://127.0.0.1:8000' +
                                newData.item.product_image[
                                  Math.floor(
                                    Math.random() *
                                      newData.item.product_image.length
                                  )
                                ].product_image
                              }
                              alt="Product image"
                            />
                          </div>
                          <div className="titles">
                            <p style={{ marginBottom: '10px' }}>
                              {newData.item.product_name}
                            </p>
                            <p>
                              Color: <span>{newData.item_color}</span>
                            </p>
                            <p>
                              Size: <span>{newData.item_size}</span>
                            </p>
                          </div>
                        </div>

                        <div className="price">
                          <p>
                            <s>
                              {newData.item.product_price +
                                newData.item.get_discounted_price}
                            </s>
                          </p>
                          <p>{newData.item.product_price}</p>
                          {/* <i class="fa-solid fa-trash-can"></i> */}
                        </div>
                        <div className="quantity">
                          Qty : &nbsp;
                          <span className="count">
                            {newData.item.product_quantity}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="summary">
            <div className="innerSummary">
              <p className="title">Shipping Address</p>
              <div className="address">
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
              </div>
              <p className="title">ORDER SUMMARY</p>
              <p>
                Item Subtotal{' '}
                <span>{tprice ? eval(tprice.join('+')) : 'XXXX'}</span>
              </p>
              <p>
                Delivery <span>Free</span>
              </p>
              <div className="voucher">
                <input type="text" placeholder="Enter Voucher Code" />
                <button className="btn btn-success">Apply</button>
              </div>
              {/* <div className="underline"></div> */}
              <p style={{ marginTop: '10px' }}>
                Estimated Total{' '}
                <span>{tprice ? eval(tprice.join('+')) : 'XXXX'}</span>
              </p>

              <div className="buttons">
                <button className="grayBtnPadding">Proceed to Payout</button>
              </div>
              <div className="buttons"></div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default OrderInfo;
