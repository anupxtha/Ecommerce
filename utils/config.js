import axios from 'axios';
import { hideLoading, showLoading } from '../components/Common/Loading';

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
