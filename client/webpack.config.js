module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  mode: "production",
  devServer: {
    port: 8000,
    historyApiFallback: true
  },
  performance: { hints: false }
};
