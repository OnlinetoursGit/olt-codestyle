'use strict';

const rules = require('./cjs');

module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  env: {
    commonjs: true,
  },
  rules,
};
