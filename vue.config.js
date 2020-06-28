module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      console.log(config.mode);
    } else {
      // 开发环境
      console.log(config.mode);
    }
  },
  devServer: {
    host: '10.10.10.61',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/water-environment-front/'
    : '/',
};
