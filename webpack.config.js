const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        'bundle': './src/index.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(less|css)$/,
                loader: 'style!css!less',
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=102400',
            },
        ],
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.WatchIgnorePlugin([
            path.resolve('./node_modules'),
        ]),
    ],
    output: {
        path: './dist/',
        filename: 'duo-onderwijsdata.js',
        libraryTarget: 'var',
        library: 'DUOOnderwijsdata',
    },
    externals: {
      'winston': 'winston',
      'axios': 'axios',
      'immutable': 'immutable',
    },
    resolve: {
      extensions: ['.js'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
};
