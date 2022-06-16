import React, { useState, useContext, useEffect } from 'react';
import apiServices from '../../utils/apiServices';
import valid from '../../utils/valid';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';

function Register() {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);

  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      router.push('/');
    }
  }, [auth]);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errMsg = valid(userData.email, userData.password);

    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });

    // dispatch({ type: 'NOTIFY', payload: { loading: true } });

    apiServices
      .registerUser(userData)
      .then(response => {
        dispatch({
          type: 'NOTIFY',
          payload: { success: 'Successfully Register' },
        });
        router.push('/login');
        // console.log(response.data);
      })
      .catch(err => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  };

  return (
    <div className='register'>
      <p className='head'>WELCOME TO LEGO</p>
      <form style={{ width: '60%' }} onSubmit={handleSubmit}>
        <div className='form'>
          <label>
            Email{' '}
            <span style={{ color: 'red' }}>
              *<br />
            </span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={userData.email}
            onChange={handleChangeInput}
          />
        </div>
        <div className='form'>
          <label>
            Password{' '}
            <span style={{ color: 'red' }}>
              *<br />
            </span>
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={userData.password}
            onChange={handleChangeInput}
          />
        </div>
        {/* <div className='form'>
          <label className='label'>
            Email{' '}
            <span style={{ color: 'red' }}>
              *<br />
            </span>
          </label>
          <input type='text' id='email' name='email' />
        </div>
        <div className='form'>
          <label className='label'>
            Email{' '}
            <span style={{ color: 'red' }}>
              *<br />
            </span>
          </label>
          <input type='text' id='email' name='email' />
        </div> */}
        <div className='registerBtn'>
          <button type='submit' className='grayBtn'>
            SIGN ME UP
          </button>
        </div>
      </form>

      <div className='Line'>
        <span className='shortLine'></span>
        <span>OR</span>
        <span className='shortLine'></span>
      </div>
      <p className='grayBtn'>SIGN ME UP WITH GOOGLE</p>
    </div>
  );
}

export default Register;
