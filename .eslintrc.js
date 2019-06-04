module.exports = {
  env: {
    browser: false,
    node: true,
    commonjs: true,
    es6: true,
    'jest/globals': true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-restricted-syntax': 0,
    radix: 0,
    'no-await-in-loop': 0,
    'no-plusplus': 0
  }
};