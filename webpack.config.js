const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const parts = require('./webpack.parts');
const webpack = require('webpack');

const CSS_LOADERS = {
  use: [
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader'
  ]
};

const PATHS = {
  app: path.join(__dirname, 'src')
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

const productionConfig = merge([
  parts.extractCss(CSS_LOADERS),
  //Use PurifyCSS only after the CSS extractor, otherwise it doesn't work
  parts.purifyCss({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true })
  })
]);

const developmentConfig = merge([
  parts.loadCss(CSS_LOADERS),
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
