export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
};

export const addToCart = (product, quantity, cart, color, size) => {
  if (product.product_quantity === 0)
    return {
      type: 'NOTIFY',
      payload: { error: 'This product is out of stock' },
    };

  const check = cart.every(items => {
    return items.item.id !== product.id;
  });

  if (!check)
    return {
      type: 'NOTIFY',
      payload: { error: 'The product is already in cart' },
    };

  return {
    type: 'ADD_CART',
    payload: [
      ...cart,
      { item: product, quantity: quantity, item_color: color, item_size: size },
    ],
  };
};
