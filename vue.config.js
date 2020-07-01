// const { httpProxyMiddlewaer } = require('http-proxy-middleware');

module.exports = {
  // process.env.BASE_API: 'http://127.0.0.1:8080/';
  // lintOnSave: false,
  /* configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      console.log(config.mode);
    } else {
      // 开发环境
      // eslint-disable-next-line no-param-reassign
      // config.BASE_API = 'http://127.0.0.1:8080/';
      // config.outputDir = 'dist';
      console.log(config.mode);
    }
  }, */
  // BASE_URL: process.env.NODE_ENV === 'production'
  //   ? '/water-environment-end/public/'
  //   : '/water-environment-end/public/',
  // outputDir: 'dist',
  // assetsDir: './',
  devServer: {
    host: '10.10.10.61',
    port: '8000',
    open: true,
    proxy: {
      // 没有运行在同一台主机上。
      '/captcha': {
        target: 'http://127.0.0.1:80',
        changeOrigin: true,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './' // /water-environment-front/dist
    : '/',
};
