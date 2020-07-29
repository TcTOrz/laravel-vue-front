/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import axios from 'axios';

import { Message } from 'element-ui';
// import router from '../router';
import cookie from './cookie';

import GLOBAL from './global';

/**
 * 封装axios
 */
// class Request {
//   private axios: AxiosInstance;

//   public constructor() {
//     const config = {
//       baseURL: GLOBAL.BASE_URL, // 'http://127.0.0.1:8080',
//       timeout: 5 * 1000, // Timeout
//       withCredentials: false, // Check cross-site Access-Control
//     };
//     this.axios = axios.create(config);
//     this.axios.interceptors.request.use(
//       (config) => {
//         if (cookie.getCookie('token')) {
//           config.headers['x-auth-token'] = cookie.getCookie('token');
// 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
//         }
//         // console.log(config);
//         return config;
//       }, (error) => {
//         Promise.reject(error);
//       },
//     );
//     this.axios.interceptors.response.use(
//       (response) => {
//         const { code, message } = response.data;
//         if (code !== 0 && code !== 200) {
//           Message({
//             message,
//             type: 'error',
//             duration: 5 * 1000,
//           });
//           return response;
//         }
//         // Do something with response data
//         return response;
//       }, (error) => {
//         // Do something with response error
//         Message({
//           message: error.message,
//           type: 'error',
//           duration: 5 * 1000,
//         });
//         Promise.reject(error);
//       },
//     );
//     (Plugin as any).install = function (Vue:any, options:any) {
//       Vue.axios = this.axios;
//       (window as any).axios = this.axios;
//       Object.defineProperties(Vue.prototype, {
//         axios: {
//           get() {
//             return this.axios;
//           },
//         },
//         $axios: {
//           get() {
//             return this.axios;
//           },
//         },
//       });
//     };
//     Vue.use((Plugin as any));
//   }
// }

// export default Request;
// export const createRequest = () => new Request();

// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     request?: Request
//   }
// }
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
    // const loadingInstance = Loading.service({ fullscreen: true });
    // loadingInstance.close();
    if (code !== 0 && code !== 200) {
      Message({
        message,
        type: 'error',
        duration: 5 * 1000,
      });
      // setTimeout(() => {
      //   router.push('/login');
      // }, 2000);
      return response;
    }
    // const loadingInstance = Loading.service({ fullscreen: true });
    // loadingInstance.close();
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    // const loadingInstance = Loading.service({ fullscreen: true });
    // loadingInstance.close();
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    Promise.reject(error);
  },

);

(Plugin as any).install = function (Vue:any, options:any) {
  Vue.axios = _axios;
  (window as any).axios = _axios;
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

Vue.use((Plugin as any));

export default Plugin;
