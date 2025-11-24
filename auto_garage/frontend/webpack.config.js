const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const mode = argv.mode || process.env.NODE_ENV || "development";

  return {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./static/frontend"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          type: "javascript/auto", // 👈 强制 webpack 按 ES 模块处理
          use: {
            loader: "babel-loader",
            options: {
              sourceType: "unambiguous", // 可选：避免 import/export 的解析错误
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    optimization: {
      minimize: mode === "production",
    },
    ignoreWarnings: [
      {
        message: /@import rules are not allowed here/,
      },
    ],
    plugins: [
      // 设置环境变量
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(mode),
        "process.env.REACT_APP_API_URL": JSON.stringify(process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000'),
      }),
    ],
    stats: {
      warningsFilter: [/@import rules are not allowed here/],
    },
  };
};
