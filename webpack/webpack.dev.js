const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "#source-map",
  devServer: {
    host: "localhost",
    historyApiFallback: true, // make sure Router works by redirecting 404 back to entry point
    port: 3000,
    open: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
