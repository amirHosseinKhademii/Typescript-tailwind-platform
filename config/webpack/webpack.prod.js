const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  mode: 'production',
  plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })],
}
