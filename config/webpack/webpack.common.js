const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

//const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  // entry: path.resolve(__dirname, '..', '../src/app/index.tsx'),
  // output: {
  //   path: path.resolve(__dirname, '..', '../build'),
  //   filename: 'bundle.js',
  //   publicPath: '/',
  // },
  // optimization: {
  //   runtimeChunk: {
  //     name: (entrypoint) => `runtime~${entrypoint.name}`,
  //   },
  //   emitOnErrors: true,
  //   moduleIds: 'deterministic',
  //   chunkIds: 'named',
  // },
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js', '.jsx'],
  //   plugins: [new TsconfigPathsPlugin()],
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(ts|js)x?$/,
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: 'babel-loader',
  //           // options: {
  //           //   plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
  //           // },
  //         },
  //       ],
  //     },

  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader', 'postcss-loader'],
  //     },
  //     {
  //       test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  //       type: 'asset/resource',
  //     },
  //     {
  //       test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
  //       type: 'asset/inline',
  //     },
  //   ],
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, '..', '../public/index.html'),
  //   }),
  // ],
  entry: path.resolve(__dirname, '..', '../src/app/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', '../build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', '../public/index.html'),
    }),
  ],
  stats: 'errors-only',
}
