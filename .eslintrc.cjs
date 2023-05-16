module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'jest': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react', 'jest', 'cypress'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
