const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const DEBUG = process.env.NODE_ENV !== 'production'

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const unchainedLibrary = 'unchained_ui';

const config = {
  devtool: DEBUG ? 'eval' : false,
  entry: [
    path.join(__dirname, 'client/pages/main/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './node_modules'),
      'client'
    ],
    extensions: ['.scss', '.css', '.js', '.json', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: [new RegExp(`node_modules\/(?!(${unchainedLibrary}))`)]
      },
      {
        test: /\.png$/,
        loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/jpeg'
      },
      {
        test: /\.woff$/,
        loader: 'url-loader?prefix=fonts/&limit=8000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/, loader: 'file-loader?prefix=fonts/'
      },
      {
        test: /\.eot$/, loader: 'file-loader?prefix=fonts/'
      },
      {
        test: /\.json$/, loader: 'json-loader'
      },
      {
        test    : /(\.scss|\.css)$/,
        loader: DEBUG ? 'style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?sourceMap&modules' :  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      }
    ]
  },
  plugins:[
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer
        ],
        sassLoader: {
          data: `@import './node_modules/${unchainedLibrary}/client/styles/_config.scss';`,
          includePaths: [`./node_modules/${unchainedLibrary}/client/styles/`]
        },
      }
    }),
    new webpack.DefinePlugin({
        'uv5_components': `'${unchainedLibrary}/client/components'`,
        'uv5_containers': `'${unchainedLibrary}/client/containers'`,
    }),
    new ExtractTextPlugin("app.css")
  ]


}

if (DEBUG) {
  config.entry.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html')
    }),
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin(
      {
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
          unused: true,
        },
        output: {
          comments: false,
        }
      }
    )
  ])
}

module.exports = config