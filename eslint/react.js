'use strict';

module.exports = {
  plugins: ['react'],
  rules: {
    // React
    'react/boolean-prop-naming': 'warn',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/forbid-prop-types': [
      'warn',
      {
        forbid: ['array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/forbid-foreign-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'warn',
    'react/prefer-es6-class': ['warn', 'always'],
    'react/prefer-stateless-function': [
      'warn',
      { ignorePureComponents: false },
    ],
    'react/prop-types': ['error', { skipUndeclared: false }],
    'react/require-default-props': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-methods',
          'getters',
          'setters',
          'lifecycle',
          '/^handle.+$/',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': [
      'warn',
      {
        ignoreCase: false,
        requiredFirst: true,
        callbacksLast: true,
        sortShapeProp: true,
      },
    ],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    // JSX
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
    'react/jsx-handler-names': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: false }],
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-pascal-case': ['warn', { allowAllCaps: false }],
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: false,
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
  },
};
