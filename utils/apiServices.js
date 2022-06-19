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

  postAddToCart(id, quantity) {
    return postCartAxios(
      ApiBaseURLProps.apiBaseURL + '/cart/?id=' + id + '&quantity=' + quantity
    );
  }

  getAddToCart() {
    return getCartAxios(ApiBaseURLProps.apiBaseURL + '/cart/');
  }
}

export default new ApiService();
