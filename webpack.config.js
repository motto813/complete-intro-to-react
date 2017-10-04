const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader?self']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }
    ]
  }
};
