import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';
import { useState } from 'react';
import apiServices from '../../utils/apiServices';
import {
  decreaseItemQuantity,
  increaseItemQty,
  removeFromCard,
  removeFromWishlist,
} from '../../store/Actions';

function Cart() {
  const [state, dispatch] = useContext(DataContext);
  const { cart, auth, wishlist } = state;
  const router = useRouter();
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('authToken') === null) {
      router.push('/');
    }
    setCartProduct(cart);
  }, [auth, cart, wishlist]);

  const removeCartList = (id, color, size) => {
    apiServices
      .removeCartlistById(id, color, size)
      .then(response => {
        dispatch(removeFromCard(id, cart));
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'The product is removed from cart' },
        });
      })
      .catch(err => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  };

  const IncreaseQuantity = (item, color, size, qty) => {
    if (qty >= item.product_quantity) {
      return dispatch({
        type: 'NOTIFY',
        payload: { error: 'Product is out of Stock' },
      });
    }

    apiServices
      .postAddToCart(item.id, 1, size, color)
      .then(response => {
        dispatch(increaseItemQty(item.id, cart));
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'The product Quantity is Increased' },
        });
      })
      .catch(err => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  };
  const DecreaseQuantity = (item, color, size, qty) => {
    if (qty <= 1) {
      return dispatch({
        type: 'NOTIFY',
        payload: { error: "Product quantity can't be less than 1" },
      });
    }

    apiServices
      .decreaseItemQty(item.id, size, color)
      .then(response => {
        dispatch(decreaseItemQuantity(item.id, cart));
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'The product Quantity is Decreased' },
        });
      })
      .catch(err => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  };

  return (
    <>
      {cartProduct && (
        <div className='cart'>
          <div className='innerCart'>
            <div className='items'>
              <p className='title'>SHOPPING LIST</p>
              {cartProduct.map(items => {
                return (
                  <>
                    <div className='cartList'>
                      <div className='cartImage'>
                        <img
                          src={
                            'http://127.0.0.1:8000' +
                            items.item.product_image[
                              Math.floor(
                                Math.random() * items.item.product_image.length
                              )
                            ].product_image
                          }
                          alt=''
                        />
                      </div>
                      <div className='cartDetails'>
                        <p>Title : {items.item.product_name}</p>
                        <p>Price : {items.item.product_price}</p>
                        <p>
                          Color <span>{items.item_size}</span>
                        </p>
                        <p>
                          Size <span>{items.item_color}</span>
                        </p>
                        <div>
                          Quantity : &nbsp; &nbsp; &nbsp;
                          <span>
                            <button
                              onClick={() =>
                                DecreaseQuantity(
                                  items.item,
                                  items.item_color,
                                  items.item_size,
                                  items.quantity
                                )
                              }
                            >
                              -
                            </button>
                          </span>
                          &nbsp; &nbsp; &nbsp;
                          <span className='count'>{items.quantity}</span>
                          &nbsp; &nbsp; &nbsp;
                          <span>
                            <button
                              onClick={() =>
                                IncreaseQuantity(
                                  items.item,
                                  items.item_color,
                                  items.item_size,
                                  items.quantity
                                )
                              }
                            >
                              +
                            </button>
                          </span>
                        </div>
                        <br />
                        <button
                          className='cartBtn'
                          onClick={() =>
                            removeCartList(
                              items.item.id,
                              items.item_color,
                              items.item_size,
                              items.quantity
                            )
                          }
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}

              {/* <div className='cartList'>
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
              </div> */}
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
                  <button className='grayBtnPadding'>
                    Proceed to checkout
                  </button>
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
      )}
    </>
  );
}

export default Cart;
