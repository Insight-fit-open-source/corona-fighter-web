const tsconfig = require('./tsconfig.json');

const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.tsx',
  ],
  moduleNameMapper,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
    '<rootDir>/.storybook/',
    '<rootDir>/__tests__/support/',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.j?t?sx?$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
};
