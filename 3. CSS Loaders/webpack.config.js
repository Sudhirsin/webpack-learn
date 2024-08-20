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
        // 2nd way to write
        use: [
          { loader: "style-loader" },
          // that will require to enable the css module. { modules: true } will generate a ramdom classes
          { loader: "css-loader", options: { modules: true } },
        ]
        // 1st way to write
        // [a, b] -> execution will happen from right to left. b, a will be executed
        // use: ['style-loader', 'css-loader'] // we need to specify the all loaders. 
      }
    ]
  }
}