import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import reducers from './Reducers';

export const DataContext = createContext();

// const useConstructor = (callBack = () => {}) => {
//   const [hasBeenCalled, setHasBeenCalled] = useState(false);
//   if (hasBeenCalled) return;
//   callBack();
//   setHasBeenCalled(true);
// };

export const DataProvider = ({ children }) => {
  // useConstructor(() => {
  //   console.log('Occurs ONCE, BEFORE the initial render.');
  // });

  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    wishlist: [],
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  const { cart, wishlist, auth, notify } = state;

  const value = useMemo(
    () => [state, dispatch],
    [auth, cart, wishlist, notify]
  );

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

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
