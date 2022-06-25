export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  ADD_WISHLIST: 'ADD_WISHLIST',
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

export const addToWishlist = (product, wishlist) => {
  const check = wishlist.every(items => {
    return items.item.id !== product.id;
  });

  if (!check)
    return {
      type: 'NOTIFY',
      payload: { error: 'The product is already in wishlist' },
    };

  return {
    type: 'ADD_WISHLIST',
    payload: [...wishlist, { item: product }],
  };
};

export const removeFromWishlist = (id, wishlist) => {
  const afterRemove = wishlist.filter(items => items.item.id !== id);

  return {
    type: 'ADD_WISHLIST',
    payload: afterRemove,
  };
};

export const removeFromCard = (id, cart) => {
  const afterRemove = cart.filter(items => items.item.id !== id);

  return {
    type: 'ADD_CART',
    payload: afterRemove,
  };
};
