const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new EslintPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    open: true,
    historyApiFallback: true, // will help in the broswer back and forward routing
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'postcss-loader', // it will help us to support the css for cross brower (css polyfills)
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env', {},
                ],
              ],
            },
          },
        }],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', // it will help us to support the css for cross brower (css polyfills)
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env', {},
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|jpeg|gig)$/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
