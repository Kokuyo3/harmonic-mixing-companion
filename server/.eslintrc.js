module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 1,
    'no-use-before-define': ['error', { functions: false, classes: true }],
  },
};
