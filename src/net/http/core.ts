import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getCurrentInstance } from 'vue'
// import { store } from '@/store'
import httpFilterConfig from './httpFilterConfig'
import codeMsg from './codeMsg'

axios.defaults.timeout = 30000

/* eslint-disable no-undef */
axios.defaults.baseURL = import.meta.env.DEV ? '/dev' : '/';

axios.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    // request.headers.token = store.state.app.token || '';
    return request;
  },
  error => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) {
      const app = getCurrentInstance();
      const config = httpFilterConfig[(response.config && response.config.url) || ''];
      const noErrTip = config && config.noErrTip === true;
      const defaultErrTipTxt = (config && config.errTxt) || '';
      const result = response.data;
      if (!noErrTip && result.status === false && result.data) {
        app?.appContext.config.globalProperties.$toast.fail(codeMsg[result.data] || result.data || defaultErrTipTxt);
      }
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  err => {
    return Promise.reject(err);
  }
)

export default axios
