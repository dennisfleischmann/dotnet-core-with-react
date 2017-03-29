const path = require('path');

module.exports = {
    entry: {
        client: './src/client',
        server: './src/server'
    },
  output: {
    path: path.resolve(__dirname, '../wwwroot/js'),
    filename: '[name].bundle.js',

  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    port: 9000,
    inline: false,
  },
  devtool: 'source-map',
};
