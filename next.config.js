const withCSS = require('@zeit/next-css');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const nextConfiguration = {
  webpack: (config, { dev }) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      // eslint-disable-next-line no-param-reassign
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    // eslint-disable-next-line no-param-reassign
    if (!dev) config.optimization.minimize = true;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  target: 'experimental-serverless-trace',
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
};

const plugins = [withBundleAnalyzer, withCSS];

if (process.env.NODE_ENV === 'production') {
  plugins.push([
    withPWA,
    {
      pwa: {
        dest: 'public',
        importScripts: ['firebase-messaging-sw.js'],
      },
    },
  ]);
}

module.exports = withPlugins(plugins, nextConfiguration);
