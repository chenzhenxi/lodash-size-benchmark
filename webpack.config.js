var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        one: './one-lodash.js', 
        separated: './separated-lodash.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};