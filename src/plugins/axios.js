/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import axios from 'axios';

import { Message } from 'element-ui';
import router from '../router';
import cookie from './cookie';

import GLOBAL from './global';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: 'http://pcm.web:8080', // process.env.baseURL || process.env.apiUrl || '',
  baseURL: GLOBAL.BASE_URL, // 'http://127.0.0.1:8080',
  timeout: 5 * 1000, // Timeout
  withCredentials: false, // Check cross-site Access-Control
  // headers: { 'Content-Type': 'Access-C/ontrol-Allow-Origin' },
};

const _axios = axios.create(config);

// axios.defaults.baseURL = 'http://pcm.web:8080';

// const _axios = axios;

// request拦截器
_axios.interceptors.request.use(
  // (config) =>
  //   // Do something before request is sent
  //   config,
  // (error) =>
  //   // Do something with request error
  //   Promise.reject(error),
  (config) => {
    if (cookie.getCookie('token')) {
      config.headers['x-auth-token'] = cookie.getCookie('token'); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    // console.log(config);
    return config;
  }, (error) => {
    Promise.reject(error);
  },
);

// Add a response interceptor
// responose拦截器
_axios.interceptors.response.use(
  (response) => {
    const { code, message } = response.data;
    // console.log(code, message);
    if (code !== 0 && code !== 200) {
      Message({
        message,
        type: 'error',
        duration: 5 * 1000,
      });
      setTimeout(() => {
        router.push('/login');
      }, 2000);
      return false;
    }
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    Promise.reject(error);
  },

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
