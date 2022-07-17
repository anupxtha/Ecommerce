import ApiBaseURLProps from './apiBaseUrl';
import {
  getAxios,
  getCartAxios,
  postAxios,
  postCartAxios,
  postShippingAddressAxios,
} from './config';

class ApiService {
  registerUser(userData) {
    return postAxios(ApiBaseURLProps.apiBaseURL + '/Register/', userData);
  }

  loginUser(userData) {
    return postAxios(ApiBaseURLProps.apiBaseURL + '/login/', userData);
  }

  shippingAddressDetails(addressData) {
    return postShippingAddressAxios(
      ApiBaseURLProps.apiBaseURL + '/location/',
      addressData
    );
  }

  getCategory() {
    return getAxios(ApiBaseURLProps.apiBaseURL + '/product/category/');
  }

  getCategoryProduct(data) {
    return postAxios(ApiBaseURLProps.apiBaseURL + '/product/category/', data);
  }

  getSubCategoryProduct(data) {
    return postAxios(
      ApiBaseURLProps.apiBaseURL + '/product/subcategory/',
      data
    );
  }

  getProduct() {
    return getAxios(ApiBaseURLProps.apiBaseURL + '/product/');
  }

  getUniqueProduct(id) {
    return postAxios(ApiBaseURLProps.apiBaseURL + '/unique/product/?id=' + id);
  }

  postAddToCart(id, quantity, size, color) {
    console.log(size, color);
    return postCartAxios(
      ApiBaseURLProps.apiBaseURL +
        '/items/?id=' +
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
    return getCartAxios(ApiBaseURLProps.apiBaseURL + '/items/');
  }

  getAddToWishlist() {
    return getCartAxios(ApiBaseURLProps.apiBaseURL + '/wishitem/');
  }

  postAddToWishlist(id) {
    return postCartAxios(ApiBaseURLProps.apiBaseURL + '/wishitem/?id=' + id, {
      id: id,
    });
  }

  removeWishlistById(id) {
    return postCartAxios(ApiBaseURLProps.apiBaseURL + '/removewish/?id=' + id, {
      id: id,
    });
  }

  removeCartlistById(id, color, size) {
    return postCartAxios(
      ApiBaseURLProps.apiBaseURL +
        '/removeall/?id=' +
        id +
        '&color=' +
        color +
        '&size=' +
        size,
      {
        id: id,
        color: color,
        size: size,
      }
    );
  }

  decreaseItemQty(id, size, color) {
    return postCartAxios(
      ApiBaseURLProps.apiBaseURL +
        '/removeitem/?id=' +
        id +
        '&color=' +
        color +
        '&size=' +
        size,
      { id: id, size: size, color: color }
    );
  }
}

export default new ApiService();
