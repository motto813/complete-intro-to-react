const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./js/ClientApp.jsx"
  ],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
    hot: true,
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader?self"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"]
      }
    ]
  }
};
