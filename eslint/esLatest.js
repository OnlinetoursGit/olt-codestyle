'use strict';

const { rules: es5 } = require('./es5');

module.exports = {
  rules: {
    ...es5,

    // Possible Errors
    'no-await-in-loop': 'error',
    'no-template-curly-in-string': 'error',

    // Best Practices
    'class-methods-use-this': 'warn',
    'no-case-declarations': 'error',
    'no-empty-pattern': 'error',
    'no-return-await': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'require-await': 'error',

    // Variables
    'no-unused-vars': [
      es5['no-unused-vars'][0],
      {
        ...es5['no-unused-vars'][1],
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      es5['no-use-before-define'][0],
      {
        ...es5['no-use-before-define'][1],
        classes: true,
      },
    ],

    // Stylistic Issues
    'func-style': [
      es5['func-style'][0],
      es5['func-style'][1],
      { allowArrowFunctions: true },
    ],
    'no-underscore-dangle': [
      es5['no-underscore-dangle'][0],
      {
        ...es5['no-underscore-dangle'][1],
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],

    // ECMAScript 6
    'arrow-body-style': ['warn', 'as-needed'],
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['warn', { includeExports: false }],
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
    'no-var': 'error',
    'object-shorthand': [
      'warn',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: true,
        avoidExplicitReturnArrows: true,
      },
    ],
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: { object: true, array: true },
        AssignmentExpression: { object: false, array: false },
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'symbol-description': 'warn',
  },
};
