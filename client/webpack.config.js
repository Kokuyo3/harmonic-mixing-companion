const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-arrow-functions',
                  '@babel/plugin-transform-runtime',
                  '@babel/plugin-syntax-top-level-await'],
              }],
          },
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|j?g|svg|gif)?$/, loader: 'file-loader' },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
};
