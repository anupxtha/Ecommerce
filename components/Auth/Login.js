import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import apiServices from '../../utils/apiServices';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';
import { validLogin } from '../../utils/valid';
import Cookies from 'js-cookie';

function Login() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;
  const initialState = { email: '', password: '' };

  const [userData, setUserData] = useState(initialState);
  const [userErr, setUserErr] = useState('');
  const router = useRouter();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    // if (Object.keys(auth).length !== 0) {
    //   router.push('/');
    // }
    if (sessionStorage.getItem('authToken') !== null) {
      setStatus(false);
      router.push('/');
    }
  }, [auth]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
    setUserErr('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = validLogin(userData.email, userData.password);

    if (errMsg) {
      setUserErr(errMsg);
      console.log(errMsg);
      dispatch({ type: 'NOTIFY', payload: { error: errMsg } });
    }
    // dispatch({ type: 'NOTIFY', payload: { loading: true } });

    apiServices
      .loginUser(userData)
      .then((response) => {
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'Welcome ' + response.data.user_proifle.name },
        });

        dispatch({
          type: 'AUTH',
          payload: response.data,
        });
        // Cookie.set('OurSiteJWT', response.data.access);
        // localStorage.setItem('loginStatus', true);
        sessionStorage.setItem('loginStatus', true);
        sessionStorage.setItem('authToken', JSON.stringify(response.data));

        apiServices
          .getAddToCart()
          .then((res) => {
            dispatch({
              type: 'ADD_CART',
              payload: res.data !== null ? res.data.item : [],
            });
            sessionStorage.setItem(
              'cartProduct',
              JSON.stringify(res.data !== null ? res.data.item : [])
            );
          })
          .catch((err) => {
            dispatch({
              type: 'NOTIFY',
              payload: { error: 'This is get add cart error' },
            });
          });

        apiServices
          .getAddToWishlist()
          .then((resp) => {
            dispatch({
              type: 'ADD_WISHLIST',
              payload: resp.data.length > 0 ? resp.data[0].product : [],
            });
            sessionStorage.setItem(
              'wishProduct',
              JSON.stringify(resp.data.length > 0 ? resp.data[0].product : [])
            );
          })
          .catch((err) => {
            dispatch({
              type: 'NOTIFY',
              payload: { error: 'this is wishlist error' },
            });
          });
        router.push('/');
      })
      .catch((err) => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: 'this is login error' },
        });
        // setUserErr('Login Error');
      });
  };

  return (
    <div className="login">
      {status && (
        <div className="inner-login">
          <p className="head">LOGIN</p>
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <div className="form">
              <label>
                Email{' '}
                <span style={{ color: 'red' }}>
                  *<br />
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChangeInput}
              />
              {console.log(userErr)}
            </div>
            <div className="form">
              <label>
                Password{' '}
                <span style={{ color: 'red' }}>
                  *<br />
                </span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChangeInput}
              />
              {userErr && (
                <span
                  style={{ color: 'red', width: '70%', marginBottom: '20px' }}
                >
                  {userErr}
                </span>
              )}
            </div>

            <div className="formBtn">
              <button type="submit" className="grayBtn">
                Login
              </button>
            </div>
          </form>
          <div className="Line">
            <span className="shortLine"></span>
            <span>OR</span>
            <span className="shortLine"></span>
          </div>
          <Link href="/register">
            <a>
              <p className="registerMsg">CREATE NEW ACCOUNT</p>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login;
