const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    // Customize if needed
    host: process.env.host,
    port: process.env.port
  })
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge(commonConfig, developmentConfig, { mode });
};
