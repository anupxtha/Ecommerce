import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import apiServices from '../../utils/apiServices';
import { DataContext } from '../../store/GlobalState';

function TopProduct() {
  const [state, dispatch] = useContext(DataContext);
  const [productData, SetProductData] = useState([]);

  console.log(productData);

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
    <div className='topSell'>
      <div className='innerTop'>
        <p>Top Selling Product</p>
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
                    <div className='rating'>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-regular fa-heart'></i>
                    </div>
                  </div>
                  <div className='details'>
                    <p>{list.product_name}</p>
                    <p>{list.product_price}</p>
                  </div>
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
              <button>View More</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
