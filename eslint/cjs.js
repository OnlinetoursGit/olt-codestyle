'use strict';

module.exports = {
  'global-require': 'warn',
  'no-mixed-requires': [
    'warn',
    {
      grouping: false,
      allowCall: false,
    },
  ],
  'no-new-require': 'error',
};
