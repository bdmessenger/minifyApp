const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'public/client.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};

const serverConfig = {
    entry: './index.js',
    target: 'node',
    node:{
        __dirname: false
    },
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};

module.exports = [clientConfig, serverConfig];