const { resolve } = require('path');

const rootPath = resolve(__dirname, '..');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  entry: resolve(rootPath, 'electron', 'main.ts'),
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: resolve(rootPath, 'dist'),
    filename: '[name].js',
  }
};
