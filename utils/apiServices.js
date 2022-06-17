import ApiBaseURLProps from './apiBaseUrl';
import { getAxios, postAxios } from './config';

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
}

export default new ApiService();
