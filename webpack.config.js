const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // dist 폴더를 정리 => 오래된 파일 없이 빌드에서 생성된 파일
    publicPath: "/",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  devServer: {
    static: "./dist",
  },
};
