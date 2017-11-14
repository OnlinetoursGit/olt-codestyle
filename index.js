'use strict';

const { resolve } = require('path');

module.exports = {
  es5: resolve(__dirname, 'eslint', 'es5.js'),
  esLatest: resolve(__dirname, 'eslint', 'esLatest.js'),
  node: resolve(__dirname, 'eslint', 'node.js'),
};
