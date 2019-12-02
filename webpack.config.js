const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/server.ts'),
  output: {
    libraryTarget: 'commonjs',
    filename: 'src/server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      entity: path.resolve(__dirname, './src/entity'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
};
