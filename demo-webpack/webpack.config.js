const path = require('path');

const config = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
    }
};

module.exports = config;