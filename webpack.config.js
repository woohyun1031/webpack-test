const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // dist 폴더를 정리 => 오래된 파일 없이 빌드에서 생성된 파일
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single", // 단일 HTML 페이지에 하나 이상의 엔트리 포인트가 있기 때문
  },
};
