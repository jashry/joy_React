module.exports = {
  entry: {
    main: "./app.js",
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "JoyReact.createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
};
