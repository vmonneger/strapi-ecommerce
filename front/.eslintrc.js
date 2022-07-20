module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: '2021',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:nuxt/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['vue'],
  rules: {
    'prefer-promise-reject-errors': 'off',
    'no-console': ['warn'],
    'no-unused-vars': ['warn'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
  },
}
