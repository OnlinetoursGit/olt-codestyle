'use strict';

const rules = require('./node');

module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  env: {
    node: true,
  },
  rules,
};
