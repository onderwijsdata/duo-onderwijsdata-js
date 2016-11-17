const BabiliPlugin = require("babili-webpack-plugin");
const webpack = require('webpack');

const config = require('./webpack.config');


module.exports = {
    entry: config.entry,
    module: config.module,
    plugins: [
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),
        new BabiliPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    output: {
        path: './dist/',
        filename: 'duo-onderwijsdata.min.js',
        libraryTarget: 'var',
        library: 'DUOOnderwijsdata',
    },
    externals: config.externals,
    resolve: config.resolve,
};
