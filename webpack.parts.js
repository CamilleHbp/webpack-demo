// The webpack-dev-server is a development server running in-memory, watching the files and refreshing content.
// We also use nodemon to watch the webpack.config.js file
exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    // Parse host and port from env to allow customization.
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: false, // Don't open the page in browser (using the VSCode debugger)
    overlay: true, // Provides an overlay for capturing warnings and errors
    hotOnly: true // Don't refresh if hot loading fails. Good while implementing the client interface
  }
});

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
exports.extractCss = ({ include, exclude, use } = {}) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: '[name].css'
  });

  return {
    module: {
      rules: [
        {
          test: /\.(s?)css$/, // Files that match the regex will be loaded through the loader plugins
          include,
          exclude,

          use: [MiniCssExtractPlugin.loader].concat(use)
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.loadCss = ({ include, exclude, use } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(s?)css$/, // Files that match the regex will be loaded through the loader plugins
        include, // list of files to include in the loader
        exclude, // list of files to exclude from the loader
        use: [
          'style-loader' // Creates `style` nodes from JS strings
        ].concat(use)
      }
    ]
  }
});
