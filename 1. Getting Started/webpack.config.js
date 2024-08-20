const path = require('path');

module.exports = {
  entry: './src/index.js', // webpack entry file
  output: {
    filename: "bundle.js", // webpack will be outputing the bundle with name of bundle.js
    path: path.resolve(__dirname, 'dist'),
  }
}