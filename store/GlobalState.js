import { createContext, useEffect, useReducer } from 'react';
import reducers from './Reducers';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  const { cart } = state;

  useEffect(() => {
    const status = sessionStorage.getItem('loginStatus');
    if (status) {
      dispatch({
        type: 'AUTH',
        payload: JSON.parse(sessionStorage.getItem('authToken')),
      });

      const cartProduct = JSON.parse(sessionStorage.getItem('cartProduct'));

      if (cartProduct) {
        dispatch({
          type: 'ADD_CART',
          payload: cartProduct,
        });
      }
    }
  }, []);

  // useEffect(() => {
  //   const cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

  //   if (cartProduct) {
  //     dispatch({
  //       type: 'ADD_CART',
  //       payload: cartProduct,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    sessionStorage.setItem('cartProduct', JSON.stringify(cart));
  }, [cart]);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
