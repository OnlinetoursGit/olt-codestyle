'use strict';

const rules = require('./prettier');

module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  env: {
    browser: true,
  },
  rules,
};
