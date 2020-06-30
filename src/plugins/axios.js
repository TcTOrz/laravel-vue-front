/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import axios from 'axios';

// import { Message } from 'element-ui';
import cookie from './cookie';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: process.env.baseURL || process.env.apiUrl || '',
  timeout: 5 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// request拦截器
_axios.interceptors.request.use(
  // (config) =>
  //   // Do something before request is sent
  //   config,
  // (error) =>
  //   // Do something with request error
  //   Promise.reject(error),
  (config) => {
    // console.log(config);
    if (cookie.getCookie('token')) {
      config.headers['x-auth-token'] = cookie.getCookie('token'); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config;
  }, (error) => {
    Promise.reject(error);
  },
);

// Add a response interceptor
// responose拦截器
_axios.interceptors.response.use(
  (response) =>
    // Do something with response data
    response,
  (error) =>
    // Do something with response error
    Promise.reject(error),

);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
