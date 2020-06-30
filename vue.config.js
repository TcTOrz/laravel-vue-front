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
  // outputDir: 'dist',
  devServer: {
    host: '10.10.10.61',
    port: '8000',
    open: true,
    proxy: {
      // eslint-disable-next-line quotes
      "/login": {
        target: 'http://127.0.0.1:80',
        changeOrigin: true,
        // secure: false,
        // changeOrigin: true,
        // pathRewrite: {
        //   // eslint-disable-next-line quotes
        //   "^/api": "/",
        // },
      },
    },
    // proxy: 'http://pcm.web:8080',
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? 'http://10.10.10.61:8080/'
  //   : 'http://10.10.10.61:8080/',
};
