const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
      // i already have some markup add the configs
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index'], // add the dependency here which has index.html
      inject: true,
      filename: 'index.html'
    }),
    new htmlWebpackPlugin({
      // i already have some markup add the configs
      template: path.resolve(__dirname, 'src/products.html'),
      chunks: ['product'], // add the dependency here which has index.html
      inject: true,
      filename: 'products.html'
    })
  ]
}