const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const commonConfig = merge([
  parts.loadCss(),
  {
    plugins: [
      // The html-webpack-plugin generates automatically the index.html file
      new HtmlWebpackPlugin({
        title: 'Webpack demo'
      })
    ]
  }
]);

const productionConfig = merge([]);

const developmentConfig = merge([
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
