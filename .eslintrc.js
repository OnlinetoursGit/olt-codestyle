'use strict';

const { esLatest, node, cjs, prettier } = require('.');

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
  rules: Object.assign({}, esLatest, node, cjs, prettier),
};
