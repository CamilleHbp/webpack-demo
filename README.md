# webpack-demo

This project is just a basic webpack configuration in order to learn the tool in a more "hands-on" fashion.

## Webpack organisation

I use a file called `webpack.parts.js` to architecture the different webpack concerns. The different parts could be separated in a file per feature (webpack-dev-server, CSS, etc.) if needed. It could also be separated in a file per mode (production/development/etc.) but I'm not a huge fan of that organisation.

## Nodemon

Nodemon watches the `webpack.config.js` file, and reloads the configuration when it is modified.

## Hot Module Replacement

The webpack configuration includes Hot Module Replacement ([HMR](https://webpack.js.org/concepts/hot-module-replacement/)).

This allows one module to be reloaded, while keeping the state of all other module. It makes for a faster refresh, as only necessary modules are refreshed, not the entire page.

You can increase the counter, then edit the `title.js` file to check what happens with hot reloading. The counter and checkbox should keep their state if you only modify the `title.js` file.

## CSS

Webpack scans the files using a regex, and loads the matched file through loader plugins ([style-loader](https://webpack.js.org/loaders/style-loader/), [css-loader](https://webpack.js.org/loaders/css-loader/), [sass-loader](https://webpack.js.org/loaders/sass-loader/), etc.).

The problem is that the corresponding CSS is inlined in the `main.js` file output by webpack.
We need to extract this CSS as it doesn't allow cache CSS and can also get a Flash of Unstyled Content (FOUC). We use [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) to extract the CSS.

## Dependencies

- node v12.10.0
- npm v6.10.3
