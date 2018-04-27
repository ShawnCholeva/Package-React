const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Npm Package Name',
        template: path.join(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    compress: true,
    port: 5000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname),
    publicPath: '/',
  }
};

module.exports = config;