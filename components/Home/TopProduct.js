import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import apiServices from '../../utils/apiServices';
import { DataContext } from '../../store/GlobalState';
import { addToCart, addToWishlist } from '../../store/Actions';
import { useRouter } from 'next/router';

function TopProduct() {
  const [state, dispatch] = useContext(DataContext);
  const { wishlist, cart } = state;
  const [productData, SetProductData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    apiServices
      .getProduct()
      .then(response => {
        SetProductData(response.data.slice(0, 4));
      })
      .catch(err => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  }, []);

  const handlewishlist = listProduct => {
    const status = sessionStorage.getItem('loginStatus');
    const authToken = sessionStorage.getItem('authToken');
    if (status) {
      const result = addToWishlist(listProduct, wishlist);

      if (result.payload.error) {
        return dispatch(result);
      }

      apiServices
        .postAddToWishlist(listProduct.id)
        .then(res => {
          dispatch(addToWishlist(listProduct, wishlist));
          dispatch({
            type: 'NOTIFY',
            payload: { success: 'The product is added in Wishlist' },
          });
        })
        .catch(err => {
          dispatch({
            type: 'NOTIFY',
            payload: { error: err.message },
          });
        });
    } else {
      router.push('/login');
    }
  };

  const addToListFromHomePage = selectedProduct => {
    const status = sessionStorage.getItem('loginStatus');
    const authToken = sessionStorage.getItem('authToken');
    if (status) {
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
    } else {
      router.push('/login');
    }
  };

  return (
    <div className='topSell'>
      <div className='innerTop'>
        <p className='listTitle'>Top Selling Product</p>
        <div className='cards'>
          {productData &&
            productData.map(list => {
              return (
                <div key={list.id} className='lists'>
                  <div className='cardsPic'>
                    <img
                      src={
                        'http://127.0.0.1:8000' +
                        list.product_image[
                          Math.floor(Math.random() * list.product_image.length)
                        ].product_image
                      }
                      alt=''
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className='love'>
                      <button
                        className='wishListBtn'
                        onClick={() => addToListFromHomePage(list)}
                      >
                        Add to cart
                      </button>
                      <i
                        className='fa-regular fa-heart'
                        onClick={() => handlewishlist(list)}
                      ></i>
                    </div>
                    {/* <div className='rating'>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-regular fa-heart'></i>
                    </div> */}
                  </div>
                  <div className='details'>
                    <Link
                      href={
                        '/product/' +
                        list.product_category.category_name.replace(' ', '-') +
                        '/' +
                        list.product_name.replace(' ', '-') +
                        '-' +
                        list.id
                      }
                    >
                      <a>
                        <p>{list.product_name}</p>
                      </a>
                    </Link>
                    {/* <button onClick={() => handlewishlist(list)}>love</button> */}
                    <p>Rs. {list.product_price}</p>
                  </div>
                </div>
              );
            })}

          {/* <div className='lists'>
            <div className='cardsPic'>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="details">
              <p>name</p>
              <p>price</p>
            </div>
          </div>
          <div className="lists">
            <div className="cardsPic">
              <img src="" alt="" />
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="details">
              <p>name</p>
              <p>price</p>
            </div>
          </div>
          <div className="lists">
            <div className="cardsPic">
              <img src="" alt="" />
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="details">
              <p>name</p>
              <p>price</p>
            </div>
          </div> */}
        </div>
        <div className='btns'>
          <Link href='/sales'>
            <a>
              <button className='viewMore'>View More</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
