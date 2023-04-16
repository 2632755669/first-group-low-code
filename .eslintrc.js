module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'settings': {
    'react': {
      'version': '^18.2.0'
      ,
    },
  },
  'overrides': [
  ],
  "parser": "@typescript-eslint/parser",
  'parserOptions': {
    'ecmaVersion': 'latest',
    "sourceType": "module",
    'project': ['./tsconfig.json', "commitlint.config.js"],
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'off',
      'tab',
      // 'space',
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    "@typescript-eslint/strict-boolean-expressions": "warn",
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/triple-slash-reference": "off",
  },
};
