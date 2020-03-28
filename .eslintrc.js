module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier/react',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'class-methods-use-this': 1,
    'no-useless-constructor': 0,
    'lines-between-class-members': 0,
    'consistent-return': 1,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 1,
    'import/prefer-default-export': 1,
    'import/no-named-as-default': 0,
    'import/extensions': ['error', 'never'],
    'no-undef': 1,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/self-closing-comp': 1,
    'react/jsx-closing-bracket-location': [
      1,
      {
        nonEmpty: 'after-props',
        selfClosing: 'tag-aligned',
      },
    ],
    'react/prefer-stateless-function': [
      1,
      {
        ignorePureComponents: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': [
      1,
      {
        allow: 'single-child',
      },
    ],
    'react/destructuring-assignment': 1,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/click-events-have-key-events': 1,
  },
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        directory: 'tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
