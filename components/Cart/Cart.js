import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';
import { useState } from 'react';
import apiServices from '../../utils/apiServices';
import { removeFromCard, removeFromWishlist } from '../../store/Actions';

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

  const removeCartList = (id) => {
    apiServices
      .removeCartlistById(id)
      .then((response) => {
        dispatch(removeFromCard(id, cart));
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'The product is removed from cart' },
        });
      })
      .catch((err) => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  };

  console.log(cartProduct);

  return (
    <>
      {cartProduct && (
        <div className="cart">
          <div className="innerCart">
            <div className="items">
              <p className="title">SHOPPING LIST</p>
              {cartProduct.map((items) => {
                return (
                  <>
                    <div className="cartList">
                      <div className="cartImage">
                        <img
                          src={
                            'http://127.0.0.1:8000' +
                            items.item.product_image[
                              Math.floor(
                                Math.random() * items.item.product_image.length
                              )
                            ].product_image
                          }
                          alt=""
                        />
                      </div>
                      <div className="cartDetails">
                        <p>Title : {items.item.product_name}</p>
                        <p>Price : {items.item.product_price}</p>
                        <p>
                          Color <span>{items.item_color}</span>
                        </p>
                        <p>
                          Size <span>{items.item_size}</span>
                        </p>
                        <div>
                          Quantity : &nbsp; &nbsp; &nbsp;
                          <span>
                            <button>-</button>
                          </span>
                          &nbsp; &nbsp; &nbsp;
                          <span className="count">{items.quantity}</span>
                          &nbsp; &nbsp; &nbsp;
                          <span>
                            <button>+</button>
                          </span>
                        </div>
                        <br />
                        <button
                          className="cartBtn"
                          onClick={() => removeCartList(items.item.id)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="cartSecondList">
                <div className="producDetail">
                  <input type="checkbox" style={{ marginRight: '20px' }} />
                  <div className="productImg">
                    <img src="" alt="Product image" />
                  </div>
                  <div className="titles">
                    <p>title</p>
                  </div>
                </div>

                <div className="price">
                  <p style={{ marginRight: '10px' }}>price</p>
                  <p>
                    <s>price</s>
                  </p>
                </div>
                <div className="quantity">
                  Quantity : &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>-</button>
                  </span>
                  &nbsp; &nbsp; &nbsp;
                  <span className="count">2</span>
                  &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>+</button>
                  </span>
                </div>
              </div>

              <div className="cartSecondList">
                <div className="producDetail">
                  <input type="checkbox" style={{ marginRight: '20px' }} />
                  <div className="productImg">
                    <img src="" alt="Product image" />
                  </div>
                  <div className="titles">
                    <p>title</p>
                  </div>
                </div>

                <div className="price">
                  <p style={{ marginRight: '10px' }}>price</p>
                  <p>
                    <s>price</s>
                  </p>
                </div>
                <div className="quantity">
                  Quantity : &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>-</button>
                  </span>
                  &nbsp; &nbsp; &nbsp;
                  <span className="count">2</span>
                  &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>+</button>
                  </span>
                </div>
              </div>

              <div className="cartSecondList">
                <div className="producDetail">
                  <input type="checkbox" style={{ marginRight: '20px' }} />
                  <div className="productImg">
                    <img src="" alt="Product image" />
                  </div>
                  <div className="titles">
                    <p>title</p>
                  </div>
                </div>

                <div className="price">
                  <p style={{ marginRight: '10px' }}>price</p>
                  <p>
                    <s>price</s>
                  </p>
                </div>
                <div className="quantity">
                  Quantity : &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>-</button>
                  </span>
                  &nbsp; &nbsp; &nbsp;
                  <span className="count">2</span>
                  &nbsp; &nbsp; &nbsp;
                  <span>
                    <button>+</button>
                  </span>
                </div>
              </div>

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
            <div className="summary">
              <div className="innerSummary">
                <p className="title">ORDER SUMMARY</p>
                <p>
                  Item Subtotal <span>Price</span>
                </p>
                <p>
                  Delivery <span>Free</span>
                </p>
                <div className="underline"></div>
                <p>Estimated Total</p>

                <div className="buttons">
                  <button className="grayBtnPadding">
                    Proceed to checkout
                  </button>
                  {/* <button className="secondGrayBtn">Continue Shopping</button>  */}
                </div>
                <div className="buttons">
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
