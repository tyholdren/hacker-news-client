const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@constants': path.resolve(__dirname, 'src/constants.js'),
    '@icons': path.resolve(__dirname, 'src/icons'),
  };
  return config;
};
