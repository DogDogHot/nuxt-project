module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'eqeqeq': 'off',
    'no-lonely-if': 'off',
    'no-console': 'off',
    'no-unreachable': 'off',
    'eol-last': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off'
  }
}
