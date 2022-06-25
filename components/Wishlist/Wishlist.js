import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';
import apiServices from '../../utils/apiServices';
import { addToCart, removeFromWishlist } from '../../store/Actions';

function Wishlist() {
  const [state, dispatch] = useContext(DataContext);
  const { wishlist, cart, auth } = state;
  const router = useRouter();
  const [wishlistProduct, setWishlistProduct] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('authToken') === null) {
      router.push('/');
    }
    setWishlistProduct(wishlist);
  }, [auth, wishlist, cart]);

  const addToCartFromWishlist = selectedProduct => {
    const result = addToCart(
      selectedProduct,
      1,
      cart,
      selectedProduct.product_size[0].product_size,
      selectedProduct.product_color[0].product_color
    );

    if (result.payload.error) {
      return dispatch(result);
    }

    apiServices
      .postAddToCart(
        selectedProduct.id,
        1,
        selectedProduct.product_size[0].product_size,
        selectedProduct.product_color[0].product_color
      )
      .then(response => {
        dispatch(
          addToCart(
            selectedProduct,
            1,
            cart,
            selectedProduct.product_size[0].product_size,
            selectedProduct.product_color[0].product_color
          )
        );
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'The product is added in Cart' },
        });
      })
      .catch(err => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  };

  const removeWishList = id => {
    apiServices
      .removeWishlistById(id)
      .then(response => {
        dispatch(removeFromWishlist(id, wishlist));
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'The product is removed from wishlist' },
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
      {wishlistProduct && (
        <div className='mainWishlist'>
          <div className='innerWishlist'>
            <p className='title'>
              <i className='fa-regular fa-heart'></i>
            </p>
            <p className='title'>My Wishlist</p>
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'>Product name</th>
                  <th scope='col'>Unit price</th>
                  <th scope='col'>Stock status</th>
                  <th scope='col'>Add to Cart</th>
                </tr>
              </thead>
              <tbody>
                {wishlistProduct.map(items => {
                  return (
                    <>
                      <tr>
                        <th scope='row'>
                          <i
                            class='fa-solid fa-trash-can'
                            onClick={() => removeWishList(items.item.id)}
                          ></i>
                        </th>
                        <td>
                          {/* <span className="wishImage"> */}
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
                            alt='ss'
                          />
                          {/* </span>{' '} */}
                          {items.item.product_name}
                        </td>
                        <td>{items.item.product_price}</td>
                        <td>
                          {items.item.product_quantity === 0
                            ? 'Out of Stock'
                            : 'In Stock'}
                        </td>
                        <td>
                          {/* <p>Added on: December 2022</p> */}
                          <button
                            className='wishListBtn'
                            onClick={() => addToCartFromWishlist(items.item)}
                          >
                            Add to cart
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Wishlist;
