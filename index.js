module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    jest: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:import/errors', 'prettier'],
  plugins: ['import', 'prettier'],
  rules: {
    complexity: [2, { max: 5 }],
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 0,
    camelcase: [2, { allow: ['^UNSAFE_'] }],
    'class-methods-use-this': 0,
    'func-names': 0,
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
    'no-restricted-syntax': [
      2,
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-use-before-define': [2, 'nofunc'],
    'no-underscore-dangle': 0,
    strict: 0,
    'prettier/prettier': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['node_modules', './src'],
      },
    },
  },
}
