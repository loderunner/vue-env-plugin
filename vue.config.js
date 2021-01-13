module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV === 'development'
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool('eval-source-map');
    }
  }
};
