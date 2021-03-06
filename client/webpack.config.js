module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader?sourceMap=true' ]}
    ]
  },
  mode: "production",
  devServer: {
    port: 8000,
    historyApiFallback: true
  },
  performance: { hints: false }
};
