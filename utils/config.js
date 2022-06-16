import axios from 'axios';
import { hideLoading, showLoading } from '../components/Common/Loading';

// axios request custom function
export async function postAxios(apiBaseUrl, data) {
  showLoading();
  try {
    var req = await axios.post(apiBaseUrl, data);
  } catch (e) {
    throw e;
  } finally {
    hideLoading();
  }
  return req;
}
