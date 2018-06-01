'use strict';

const rules = require('./es5');

module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  env: {
    browser: true,
    commonjs: true,
  },
  rules,
};
