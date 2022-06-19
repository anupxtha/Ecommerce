import axios from 'axios';
import { hideLoading, showLoading } from '../components/Common/Loading';

export function authorizationHeader() {
  const authToken = JSON.parse(sessionStorage.getItem('authToken'));
  const accessToken = authToken && authToken.access;
  console.log('Bearer ' + accessToken);
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
}

// axios request post function
export async function postAxios(apiBaseUrl, data) {
  showLoading();
  try {
    var res = await axios.post(apiBaseUrl, data);
  } catch (e) {
    throw e;
  } finally {
    hideLoading();
  }
  return res;
}

// axios request get function
export async function getAxios(apiBaseUrl) {
  showLoading();
  try {
    var res = await axios.get(apiBaseUrl);
  } catch (e) {
    throw e;
  } finally {
    hideLoading();
  }
  return res;
}

// axios request post function
export async function postCartAxios(apiBaseUrl) {
  showLoading();
  try {
    var data = '';
    var res = await axios.post(apiBaseUrl, data, { ...authorizationHeader() });
  } catch (e) {
    throw e;
  } finally {
    hideLoading();
  }
  return res;
}
// axios request post function
export async function getCartAxios(apiBaseUrl) {
  showLoading();
  try {
    var res = await axios.get(apiBaseUrl, { ...authorizationHeader() });
  } catch (e) {
    throw e;
  } finally {
    hideLoading();
  }
  return res;
}
