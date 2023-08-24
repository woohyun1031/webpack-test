const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

// express에서 webpack-dev-middleware와 webpack.config.js를 사용하도록 설정.
// 기본 설정 파일
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// 포트 3000에서 파일 제공
app.listen(3000, function () {
  console.log("Example app listening on port 3000!\n");
});

// webpack-dev-middleware는 webpack에서 처리한 파일을 서버로 내보내는 래퍼다.
// 이것은 내부적으로 webpack-dev-server에서 사용되지만,
// 사용자가 원하는 경우 더 많은 설정을 허용하기 위해 별도의 패키지로 사용할 수 있다.
// webpack-dev-middleware와 express 서버를 결합한 예시
