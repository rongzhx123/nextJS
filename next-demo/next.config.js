const withLess = require('@zeit/next-less')
const path = require('path');

module.exports = withLess({
  webpack: (config, options) => {
    const alias = {
      utils: path.resolve(__dirname, './utils'),
      components: path.resolve(__dirname, './components'),
    };
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...alias
    };
    return config;
  },
  exportPathMap: () => ({
    '/head': { page: '/head' },
  })
});
