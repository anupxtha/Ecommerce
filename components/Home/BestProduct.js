import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../store/GlobalState';
import apiServices from '../../utils/apiServices';

function BestProduct() {
  const [state, dispatch] = useContext(DataContext);
  // const { wishlist, cart } = state;
  const [productData, SetProductData] = useState([]);
  // const router = useRouter();

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
  return (
    <div className='electronic'>
      <div className='innerTop'>
        <p className='listTitle '>Best Reviewd Electronic</p>
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
                        // onClick={() => addToListFromHomePage(list)}
                      >
                        Add to cart
                      </button>
                      <i
                        className='fa-regular fa-heart'
                        // onClick={() => handlewishlist(list)}
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
          {/* <div className="lists">
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
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default BestProduct;
