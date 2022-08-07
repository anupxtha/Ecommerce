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
import Link from 'next/link';

function Cart({ user }) {
  const [state, dispatch] = useContext(DataContext);
  const { cart, auth, wishlist, selected_items } = state;
  const router = useRouter();
  const [cartProduct, setCartProduct] = useState([]);

  const [selectedCart, setSelectedCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectsCart, setSelectsCart] = useState([]);

  // console.log(cartProduct);

  useEffect(() => {
    if (sessionStorage.getItem('authToken') === null) {
      router.push('/');
    }
    setCartProduct(cart);
  }, [auth, cart, wishlist, selected_items]);

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

  const selectedItem = (items, e, ids) => {
    // console.log(items);
    // console.log(e);
    // console.log(e.target.checked);
    // console.log(selectsCart);
    // if (ids) {
    console.log('items', ids);
    const filterProduct = cartProduct.filter(newData => {
      const { id } = newData.item;

      return id === ids;
    });
    console.log('filterProduct', filterProduct);

    if (e.target.checked === true) {
      setSelectedCart([...selectedCart, ...filterProduct]);
    } else {
      console.log(selectedCart);
      const filterCheck = selectedCart.filter(newData => {
        console.log(newData);
        const { id } = newData;
        // console.log(e.target.value);
        return id != e.target.value;
      });
      setSelectedCart(filterCheck);
    }
    // }
    // console.log(selectedCart);
  };

  console.log('sss', selectedCart);

  const shopping = e => {
    const checkBoxCart = document.querySelectorAll('.cartCheck');
    console.log(selectedCart.length);

    if (selectedCart.length === 0) {
      dispatch({
        type: 'NOTIFY',
        payload: { error: 'Please Select Items' },
      });
    } else {
      if (
        sessionStorage.getItem('selectedItems') &&
        JSON.parse(sessionStorage.getItem('selectedItems')).length <= 0
      ) {
        dispatch({
          type: 'SELECTED_ITEMS',
          payload: [],
        });
        sessionStorage.removeItem('selectedItems');

        dispatch({
          type: 'SELECTED_ITEMS',
          payload: selectedCart,
        });
        // sessionStorage.setItem('selectedItems', JSON.stringify(selected_items));
        sessionStorage.setItem('selectedItems', JSON.stringify(selectedCart));
        router.push('/shippingAddress');
      }

      dispatch({
        type: 'SELECTED_ITEMS',
        payload: selectedCart,
      });
      sessionStorage.setItem('selectedItems', JSON.stringify(selected_items));
      router.push('/shippingAddress');
      // for (let i = 0; i < checkBoxCart.length; i++) {

      //   if (checkBoxCart[i].checked === true) {

      //     router.push('/shippingAddress');
      //     console.log('send selectedC');
      //   } else if (checkBoxCart[i].checked === false) {
      //     setSelectedCart([]);
      //     dispatch({
      //       type: 'NOTIFY',
      //       payload: { error: 'Please Select Items' },
      //     });
      //     console.log(selectedC000000000000000000art);
      //   }
      // }
    }
  };

  console.log(cartProduct);

  const selectAll = e => {
    if (e.target.checked) {
      setSelectedCart(cartProduct);
    }
    if (e.target.checked === false) {
      // alert('hey');
      setSelectedCart([]);
    }
    const checkBoxCart = document.querySelectorAll('.cartCheck');
    console.log(checkBoxCart.length);
    if (e.target.checked === true) {
      for (let i = 0; i < checkBoxCart.length; i++) {
        checkBoxCart[i].checked = true;
        console.log(checkBoxCart[i].checked);
      }
    } else {
      for (let i = 0; i < checkBoxCart.length; i++) {
        checkBoxCart[i].checked = false;
        console.log(checkBoxCart[i].checked);
      }
    }
  };

  return (
    <>
      {cartProduct && (
        <div className='cart'>
          <div className='innerCart'>
            <div className='items'>
              <p className='title'>SHOPPING LIST</p>
              <input type='checkbox' onChange={selectAll} />
              <label>Select All</label>
              {cartProduct.length === 0 && (
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                    fontSize: '18px',
                  }}
                >
                  Cart is empty...
                </p>
              )}
              {/* {cartProduct.map(items => {
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
              })} */}

              <div className='cartAll'>
                {cartProduct.map(items => {
                  return (
                    <>
                      <div className='cartSecondList'>
                        <div className='producDetail'>
                          <input
                            type='checkbox'
                            className='cartCheck'
                            value={items.id}
                            style={{ marginRight: '20px' }}
                            onChange={e => {
                              selectedItem(items, e, items.item.id);
                              // setItems(items)
                            }}
                          />
                          <div className='productImg'>
                            <img
                              src={
                                'http://127.0.0.1:8000' +
                                items.item.product_image[
                                  Math.floor(
                                    Math.random() *
                                      items.item.product_image.length
                                  )
                                ].product_image
                              }
                              alt='Product image'
                            />
                          </div>
                          <div className='titles'>
                            <p>{items.item.product_name}</p>
                            <p>Color : {items.item_size}</p>
                            <p>Size : {items.item_color}</p>
                          </div>
                        </div>

                        <div className='price'>
                          <p style={{ marginRight: '10px' }}>
                            {items.item.get_discounted_price}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                              <s>
                                {items.item.product_price}
                                {/* {items.quantity * items.item.product_price} */}
                              </s>
                            </span>
                          </p>

                          {/* <p></p> */}
                          <i
                            class='fa-solid fa-trash-can'
                            onClick={() =>
                              removeCartList(
                                items.item.id,
                                items.item_color,
                                items.item_size,
                                items.quantity
                              )
                            }
                            style={{ cursor: 'pointer' }}
                          ></i>
                        </div>
                        <div className='quantity'>
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
                      </div>
                    </>
                  );
                })}
              </div>

              {/* <div className='cartSecondList'>
                <div className='producDetail'>
                  <input type='checkbox' style={{ marginRight: '20px' }} />
                  <div className='productImg'>
                    <img src='' alt='Product image' />
                  </div>
                  <div className='titles'>
                    <p>title</p>
                  </div>
                </div>

                <div className='price'>
                  <p style={{ marginRight: '10px' }}>price</p>
                  <p>
                    <s>price</s>
                  </p>
                </div>
                <div className='quantity'>
                  Quantity : &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>-</button>
                  </span>
                  &nbsp; &nbsp; &nbsp;
                  <span className='count'>2</span>
                  &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>+</button>
                  </span>
                </div>
              </div>

              <div className='cartSecondList'>
                <div className='producDetail'>
                  <input type='checkbox' style={{ marginRight: '20px' }} />
                  <div className='productImg'>
                    <img src='' alt='Product image' />
                  </div>
                  <div className='titles'>
                    <p>title</p>
                  </div>
                </div>

                <div className='price'>
                  <p style={{ marginRight: '10px' }}>price</p>
                  <p>
                    <s>price</s>
                  </p>
                </div>
                <div className='quantity'>
                  Quantity : &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>-</button>
                  </span>
                  &nbsp; &nbsp; &nbsp;
                  <span className='count'>2</span>
                  &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>+</button>
                  </span>
                </div>
              </div> */}

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
                  Item Subtotal ( {selectedCart.length} )
                  <span>
                    {selectedCart.map(item => {
                      totalPrice += parseInt(
                        item.quantity * item.item.get_discounted_price
                      );
                      console.log(item.quantity);
                    })}
                    {totalPrice ? totalPrice : 'XXXX'}
                  </span>
                </p>
                <p>
                  Delivery <span>Free</span>
                </p>
                <div className='underline'></div>
                <p style={{ marginTop: '10px' }}>
                  Estimated Total{' '}
                  <span>{totalPrice ? totalPrice : 'XXXX'}</span>
                </p>

                <div className='buttons'>
                  {/* <Link href="/shippingAddress"> */}
                  {/* <a style={{ color: 'black' }}> */}
                  <button className='grayBtnPadding' onClick={shopping}>
                    Continue Shopping
                  </button>
                  {/* </a> */}
                  {/* </Link> */}
                  {/* <button className="secondGrayBtn">Continue Shopping</button>  */}
                </div>
                <div className='buttons'>
                  {/* <button className="grayBtn">Proceed to checkout</button>  */}
                  {/* <button className='secondGrayBtnPadding'>
                    Continue Shopping
                  </button> */}
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
