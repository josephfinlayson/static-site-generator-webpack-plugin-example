var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {

  entry: './src/index',
  externals: {
    // Use external version
    "d": "reshape",
    "e": "reshape-expressions",
    "f": "reshape-includes"

  },
  output: {
    path: 'build',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html/,
        loader: 'html',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ),
        include: __dirname + '/src'
      },
      {
        test: /\.(jpg|png)/,
        loader: 'file-loader?name=assets/img-[hash:6].[ext]',
        include: __dirname + '/src'
      },
      {
        test: /\.(ico|otf|pdf)/,
        loader: 'file-loader?name=[name].[ext]',
        include: __dirname + '/src/'
      },
      {test: /\.json$/, loader: "json"},

    ],
  },
  postcss: [autoprefixer({browsers: ['last 2 versions']})],
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin({
      paths: [
        '/',
        '/landing/'
      ]}),
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
  ]
};
