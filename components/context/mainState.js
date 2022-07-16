import React, { useEffect, useState } from 'react';
import apiServices from '../../utils/apiServices';
import MainContext from './mainContext';
function mainState(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiServices
      .getProduct()
      .then((response) => {
        setProducts(response.data);
        // setSearchedProduct(response.data);
      })
      .catch((err) => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  }, []);
  console.log(products);
  return (
    <MainContext.Provider value={{ products, setProducts }}>
      {props.children}
    </MainContext.Provider>
  );
}

export default mainState;
