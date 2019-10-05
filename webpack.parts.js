// The webpack-dev-server is a development server running in-memory,
// watching the files and refreshing content.
// We also use nodemon to watch the webpack.config.js file
exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    // Parse host and port from env to allow customization.
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: false, // Open the page in browser
    overlay: true // Provides an overlay for capturing warnings and errors
  }
});
