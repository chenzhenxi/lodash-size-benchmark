var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        importSingleMember: './import-single-member.js', 
        cherryPick: './cherry-pick.js', 
        separated: './separated-lodash.js',
        oldSchool: './old-school.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};