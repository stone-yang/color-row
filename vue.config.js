// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const ENV = process.env.NODE_ENV || 'dev';
const options = {
  pro: {
    zipPath: './dist/pro',
    assetsRoot: path.resolve(__dirname, './dist/pro', pkg.version),
    assetsPublicPath: `https://m.hellobike.com/${pkg.name}/pro/${pkg.version}/`,
  },
  pre: {
    zipPath: './dist/pre',
    assetsRoot: path.resolve(__dirname, './dist/pre', pkg.version),
    assetsPublicPath: `https://m.hellobike.com/${pkg.name}/pre/${pkg.version}/`,
  },
  uat: {
    zipPath: './dist/uat',
    assetsRoot: path.resolve(__dirname, './dist/uat', pkg.version),
    assetsPublicPath: `https://m.hellobike.com/${pkg.name}/uat/${pkg.version}/`,
  },
  fat: {
    zipPath: './dist/fat',
    assetsRoot: path.resolve(__dirname, './dist/fat', pkg.version),
    assetsPublicPath: `https://m.hellobike.com/${pkg.name}/fat/${pkg.version}/`,
  },
  dev: {
    zipPath: './dist/dev',
    assetsRoot: path.resolve(__dirname, './dist/dev', pkg.version),
    assetsPublicPath: process.env.IS_BUILD ? `https://m.hellobike.com/${pkg.name}/dev/${pkg.version}/` : '/',
    // assetsPublicPath: `https://m.hellobike.com/${pkg.name}/dev/${pkg.version}/`,
  },
};

const config = options[ENV] || options.dev;
process.env.VUE_APP_ENV = process.env.NODE_ENV;
if (process.env.IS_BUILD || process.env.NODE_ENV !== 'dev') {
  process.env.NODE_ENV = 'production';
}
module.exports = {
  crossorigin: 'anonymous',
  outputDir: config.assetsRoot,
  baseUrl: config.assetsPublicPath,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'zepto',
      }),
    ],
    module: {
      rules: [{
        test: require.resolve('zepto'),
        loader: 'exports-loader?window.Zepto!script-loader',
      }],
    },
  },
};
