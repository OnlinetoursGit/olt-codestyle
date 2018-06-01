'use strict';

const rules = require('./esLatest');

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  rules,
};
