const withCSS = require('@zeit/next-css');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = withCSS({
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      // eslint-disable-next-line no-param-reassign
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  target: 'experimental-serverless-trace',
  env: {
    PREVIEW_HOST: process.env.PREVIEW_HOST,
  },
});
