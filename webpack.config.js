const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (config, options) => {

  config.resolve = {
      modules: ['node_modules', path.resolve(__dirname)]
  };

  config.plugins.push(
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.resolve(__dirname, 'dll', 'polyfills-manifest.json'))
    }),
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.resolve(__dirname, 'dll', 'vendor-manifest.json'))
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      path.resolve(__dirname, 'dll', 'polyfills-dll-es5.js')
    ]),
    new CopyWebpackPlugin([
      path.resolve(__dirname, 'dll', 'vendor-dll-es5.js')
    ])
  );

  return config;
};

