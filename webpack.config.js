const path = require('path');

module.exports = {
  // Define the entry point of your application
  entry: './src/index.js',

  // Define the output directory and filename
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Define how different types of modules will be treated
  module: {
    rules: [
      {
        test: /\.scss$/, // Target all .scss files
        use: [
          'style-loader', // Adds CSS to the DOM by injecting a <style> tag
          'css-loader',   // Interprets @import and url() like import/require() and will resolve them
        
          {
            loader: 'resolve-url-loader', // Rewrites relative paths in url() statements
            options: {
              sourceMap: true, // ensure source maps are enabled
            }
          },
          {
            loader: 'sass-loader', // Loads a Sass/SCSS file and compiles it to CSS
            options: {
              sourceMap: true // Required for resolve-url-loader to function properly
            }
          }
        ]
      }
    ]
  },

  // Enable source maps for debugging
  devtool: 'source-map'
};