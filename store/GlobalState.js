import { createContext, useEffect, useReducer } from 'react';
import reducers from './Reducers';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    wishlist: [],
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  const { cart, wishlist } = state;

  useEffect(() => {
    const status = sessionStorage.getItem('loginStatus');
    if (status) {
      dispatch({
        type: 'AUTH',
        payload: JSON.parse(sessionStorage.getItem('authToken')),
      });

      const cartProduct = JSON.parse(sessionStorage.getItem('cartProduct'));
      const wishProduct = JSON.parse(sessionStorage.getItem('wishProduct'));

      if (cartProduct) {
        dispatch({
          type: 'ADD_CART',
          payload: cartProduct,
        });
      }

      if (wishProduct) {
        dispatch({
          type: 'ADD_WISHLIST',
          payload: wishProduct,
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

  useEffect(() => {
    sessionStorage.setItem('wishProduct', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
