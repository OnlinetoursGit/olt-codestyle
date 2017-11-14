'use strict';

module.exports = {
  rules: {
    'callback-return': 'warn',
    'handle-callback-err': ['warn', 'err'],
    'no-buffer-constructor': 'error',
    'no-process-exit': 'warn',
    'no-sync': ['warn', { allowAtRootLevel: true }],
  },
};
