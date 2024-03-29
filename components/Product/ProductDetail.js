import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../store/GlobalState';
import apiServices from '../../utils/apiServices';
import { addToCart } from '../../store/Actions';
import { useRouter } from 'next/router';

function ProductDetail(props) {
  const [state, dispatch] = useContext(DataContext);
  const { cart } = state;

  const { pid } = props;
  const [uniProduct, SetUniProduct] = useState(null);

  // const initialState = { quantity: '' };
  // const [userData, setUserData] = useState(initialState);

  const [count, setCount] = useState(1);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(uniProduct && uniProduct.product_color[0].product_color);
    setSize(uniProduct && uniProduct.product_size[0].product_size);
  }, [uniProduct]);

  const router = useRouter();

  // console.log(color, size, count);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const chooseColor = (color) => {
    setColor(color);
  };

  const chooseSize = (size) => {
    setSize(size);
  };

  useEffect(() => {
    apiServices
      .getUniqueProduct(pid)
      .then((response) => {
        SetUniProduct(response.data);
      })
      .catch((err) => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  }, [pid]);

  const checkLoginStatus = (selectedProduct) => {
    const status = sessionStorage.getItem('loginStatus');
    const authToken = sessionStorage.getItem('authToken');
    if (status) {
      // dispatch(addToCart(selectedProduct, userData.quantity, cart));

      // apiServices
      //   .getAddToCart()
      //   .then(response => {
      //     console.log(response);
      //     // dispatch(addToCart(selectedProduct, userData.quantity, cart));
      //   })
      //   .catch(err => {
      //     dispatch({
      //       type: 'NOTIFY',
      //       payload: { error: err.message },
      //     });
      //   });

      const result = addToCart(selectedProduct, count, cart, color, size);

      if (result.payload.error) {
        return dispatch(result);
      }

      apiServices
        .postAddToCart(selectedProduct.id, count, size, color)
        .then((response) => {
          dispatch(addToCart(selectedProduct, count, cart, color, size));
          dispatch({
            type: 'NOTIFY',
            payload: { success: 'The product is added in Cart' },
          });
        })
        .catch((err) => {
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
    <>
      {uniProduct && (
        <div className="productDetails">
          <div className="innerProductDetail">
            <div className="productImage">
              <div className="active">
                <img
                  src={
                    'http://127.0.0.1:8000' +
                    uniProduct.product_image[0].product_image
                  }
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="nextImg">
                <div className="innerNextImg" style={{ marginTop: '0%' }}>
                  <img
                    src={
                      'http://127.0.0.1:8000' +
                      uniProduct.product_image[1].product_image
                    }
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="innerNextImg">
                  <img
                    src={
                      'http://127.0.0.1:8000' +
                      uniProduct.product_image[2].product_image
                    }
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="innerNextImg" style={{ marginBottom: '0%' }}>
                  <img
                    src={
                      'http://127.0.0.1:8000' +
                      uniProduct.product_image[3].product_image
                    }
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
            <div className="productDescription">
              {/* <form action=''> */}
              <p className="innerTitle">
                Title
                <span>
                  <i className="fa-solid fa-share-nodes"></i>
                  <i className="fa-regular fa-heart"></i>
                </span>
              </p>
              <div className="innerDescription">
                <p className="description">{uniProduct.product_description}</p>
                <p className="price">Price : Rs. {uniProduct.product_price}</p>
                <p className="price">
                  After Discount : Rs.{' '}
                  {uniProduct.product_price - uniProduct.get_discounted_price}{' '}
                  {'  '}({uniProduct.product_discount}%)
                </p>
                <div className="quantity">
                  <p>Quantity</p>
                  <span>
                    <button
                      onClick={() => {
                        count - 1 < 1 ? setCount(1) : setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                  </span>
                  <span className="count">{count}</span>
                  <span>
                    <button
                      onClick={() => {
                        count + 1 > uniProduct.product_quantity
                          ? setCount(count)
                          : setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </span>

                  {/* Qunatity :{' '}
                  <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    value={userData.quantity}
                    onChange={handleChangeInput}
                  /> */}
                </div>
                <div className="filter">
                  <div className="color">
                    <p>Color</p>
                    {uniProduct.product_color.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className=""
                          onClick={() => chooseColor(item.product_color)}
                        >
                          {item.product_color}
                        </span>
                      );
                    })}
                  </div>
                  <div className="size">
                    <p>Size</p>
                    {uniProduct.product_size.map((size, index) => {
                      return (
                        <span
                          key={index}
                          className=""
                          onClick={() => chooseSize(size.product_size)}
                        >
                          {size.product_size}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="buttons">
                {/* <div>Quantity</div>  */}
                <div className="btns">
                  <button
                    className="cartBtn"
                    style={{ backgroundColor: '#787878', marginLeft: '7.5%' }}
                    onClick={() => checkLoginStatus(uniProduct)}
                  >
                    Add to cart
                  </button>
                  <button className="cartBtn" style={{ marginLeft: '5%' }}>
                    Buy Now
                  </button>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      )}
    </>
  );

  // return (
  // <div className='productDetails'>
  //   <div className='innerProductDetail'>
  //     <div className='productImage'>
  //       <div className='active'></div>
  //       <div className='nextImg'>
  //         <div className='innerNextImg' style={{ marginTop: '0%' }}></div>
  //         <div className='innerNextImg'></div>
  //         <div className='innerNextImg' style={{ marginBottom: '0%' }}></div>
  //       </div>
  //     </div>
  //     <div className='productDescription'>
  //       <form action=''>
  //         <p className='innerTitle'>
  //           Title
  //           <span>
  //             <i className='fa-solid fa-share-nodes'></i>
  //             <i className='fa-regular fa-heart'></i>
  //           </span>
  //         </p>
  //         <div className='innerDescription'>
  //           <p className='description'>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  //             volutpat ac quam a aliquam. Proin ultricies neque vel tellus
  //             feugiat, in egestas turpis molestie. Integer ut justo urna.
  //             Morbi ut nunc quis eros congue facilisis .
  //           </p>
  //           <p className='price'>Price : {uniProduct.product_price}</p>
  //           <p className='price'>
  //             After Discount :
  //             {uniProduct.product_price - uniProduct.get_discounted_price}{' '}
  //             {'  '}({uniProduct.product_discount}%)
  //           </p>
  //           <p>Qunatity</p>
  //           <div className='filter'>
  //             <p>Color</p>
  //             <p>Size</p>
  //           </div>
  //         </div>
  //         <div className='buttons'>
  //           {/* <div>Quantity</div>  */}
  //           <div className='btns'>
  //             <button
  //               style={{ backgroundColor: '#787878', marginLeft: '7.5%' }}
  //               onClick={() => checkLoginStatus(uniProduct)}
  //             >
  //               Add to cart
  //             </button>
  //             <button style={{ marginLeft: '5%' }}>Buy Now</button>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // </div>
  // );
}

export default ProductDetail;
