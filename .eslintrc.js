'use strict';

const { esLatest, node } = require('.');

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  root: true,
  plugins: ['prettier'],
  extends: [esLatest, node],
  rules: { 'prettier/prettier': 'warn' },
};
