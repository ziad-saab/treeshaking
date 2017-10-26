const path = require('path');

module.exports = {
    entry: path.resolve('./index.js'),
    output: {
        path: path.resolve('./public'),
        filename: '[name]-[hash].js',
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};