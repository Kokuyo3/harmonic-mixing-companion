module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 1,
    'no-use-before-define': ['error', { functions: false, classes: true }],
  },
};
