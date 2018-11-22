module.exports = {
  root: true,
  // quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false
  },
  env: {
    node: true,
    // browser: true

  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    // 'google'
  ],
  rules: {
    "linebreak-style": 0,
    "linebreak-style": [0 ,"error", "windows"], 
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'max-len': [1, 200, 2, {
      ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      ignoreUrls: true,
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
