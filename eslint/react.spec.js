'use strict';

const rules = require('./react');

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  rules,
};
