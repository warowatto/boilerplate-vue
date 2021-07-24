module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'arrow-parens': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'class-methods-use-this': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'lines-between-class-members': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-empty-function': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
