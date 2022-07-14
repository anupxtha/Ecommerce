import { ACTIONS } from './Actions';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTIONS.ADD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTIONS.ADD_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case ACTIONS.SELECTED_ITEMS:
      return {
        ...state,
        selected_items: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
