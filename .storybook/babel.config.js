const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        src: ['./src'],
        extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    ],
  ],
};