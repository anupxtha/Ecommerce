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
    selected_items: [],
  };

  const [state, dispatch] = useReducer(reducers, initialState);

  const { cart, wishlist, auth, notify, selected_items } = state;

  const value = useMemo(
    () => [state, dispatch],
    [auth, cart, wishlist, notify, selected_items]
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
      const items = JSON.parse(sessionStorage.getItem('selectedItems'));

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

      if (items) {
        dispatch({
          type: 'SELECTED_ITEMS',
          payload: items,
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

  useEffect(() => {
    sessionStorage.setItem('selectedItems', JSON.stringify(selected_items));
  }, [selected_items]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
