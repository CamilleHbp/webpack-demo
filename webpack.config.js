const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const loadersCss = {
  use: [
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader'
  ]
};

const commonConfig = merge([
  {
    plugins: [
      // The html-webpack-plugin generates automatically the index.html file
      new HtmlWebpackPlugin({
        title: 'Webpack demo'
      })
    ]
  }
]);

const productionConfig = merge([parts.extractCss(loadersCss)]);

const developmentConfig = merge([
  parts.loadCss(loadersCss),
  parts.devServer({
    // Customize if needed
    host: process.env.host,
    port: process.env.port
  }),
  {
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge(commonConfig, developmentConfig, { mode });
};
