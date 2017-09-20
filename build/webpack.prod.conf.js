const path               = require('path');
const webpack            = require('webpack');
const Merge              = require('webpack-merge');
const BaseConfig         = require('./webpack.base.conf.js');
const CssAssetsPlugin    = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Utils              = require('./utils');

module.exports = Merge(BaseConfig, {
  entry: Utils.getEntryConfig(),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
  },

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
    ]
  },

  devtool: '#source-map',

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, '../dist')],
      {root: path.join(__dirname, '../'), verbose: true, dry: false}),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {use: [require('nib')()], import: ['~nib/lib/nib/index.styl'],},
        vue: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            stylus: ExtractTextPlugin.extract('css-loader!stylus-loader')
          }
        },
      }
    }),
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
    new CssAssetsPlugin({
      cssProcessorOptions: {autoprefixer: false, discardComments: {removeAll: true}},
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      sourceMap: true
    }),
  ].concat(Utils.getHtmlPluginConfig({isDev: false})),

});