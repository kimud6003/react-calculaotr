module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-console': 0,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
};
