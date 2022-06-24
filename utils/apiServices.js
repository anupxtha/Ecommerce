import ApiBaseURLProps from './apiBaseUrl';
import { getAxios, getCartAxios, postAxios, postCartAxios } from './config';

class ApiService {
  registerUser(userData) {
    return postAxios(ApiBaseURLProps.apiBaseURL + '/Register/', userData);
  }

  loginUser(userData) {
    return postAxios(ApiBaseURLProps.apiBaseURL + '/login/', userData);
  }

  getProduct() {
    return getAxios(ApiBaseURLProps.apiBaseURL + '/product/');
  }

  getUniqueProduct(id) {
    return postAxios(ApiBaseURLProps.apiBaseURL + '/unique/product/?id=' + id);
  }

  postAddToCart(id, quantity, size, color) {
    return postCartAxios(
      ApiBaseURLProps.apiBaseURL +
        '/cart/?id=' +
        id +
        '&quantity=' +
        quantity +
        '&size=' +
        size +
        '&color=' +
        color,
      { id: id, quantity: quantity, size: size, color: color }
    );
  }

  getAddToCart() {
    return getCartAxios(ApiBaseURLProps.apiBaseURL + '/cart/');
  }

  getAddToWishlist() {
    return getCartAxios(ApiBaseURLProps.apiBaseURL + '/wishitem/');
  }

  postAddToWishlist(id) {
    return postCartAxios(ApiBaseURLProps.apiBaseURL + '/wishitem/?id=' + id, {
      id: id,
    });
  }
}

export default new ApiService();
