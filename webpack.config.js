const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Progressive Web Application",
    }),
    new WorkboxPlugin.GenerateSW({
      // 이 옵션은 ServiceWorkers가 빠르게 도달하도록 장려합니다
      // 그리고 "오래된" SW가 돌아다니는 것을 허용하지 않습니다
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
