export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
};

export const addToCart = (product, quantity, cart) => {
  if (product.product_quantity === 0)
    return {
      type: 'NOTIFY',
      payload: { error: 'This product is out of stock' },
    };

  const check = cart.every(item => {
    return item.id !== product.id;
  });

  if (!check)
    return {
      type: 'NOTIFY',
      payload: { error: 'The product is already in cart' },
    };

  return {
    type: 'ADD_CART',
    payload: [...cart, { ...product, quantity: quantity }],
  };
};
