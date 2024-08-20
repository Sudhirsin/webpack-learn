const path = require('path');

module.exports = {
  entry: './src/index.js', // webpack entry file
  output: {
    filename: "bundle.js", // webpack will be outputing the bundle with name of bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
  module: { // loaders
    rules: [
      {
        test: /.css$/,
        // [a, b] -> execution will happen from right to left. b, a will be executed
        use: ['style-loader', 'css-loader'] // we need to specify the all loaders. 
      }
    ]
  }
}