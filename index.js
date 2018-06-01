'use strict';

const { resolve } = require('path');

module.exports = {
  es5: resolve(__dirname, 'eslint', 'es5.js'),
  esLatest: resolve(__dirname, 'eslint', 'esLatest.js'),
  cjs: resolve(__dirname, 'eslint', 'cjs.js'),
  node: resolve(__dirname, 'eslint', 'node.js'),
  react: resolve(__dirname, 'eslint', 'react.js'),
};
