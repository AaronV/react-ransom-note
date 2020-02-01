var path = require('path');

module.exports = {
  mode: 'production',
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
};
