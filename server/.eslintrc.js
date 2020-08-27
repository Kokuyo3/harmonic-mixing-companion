module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
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
  },
};
