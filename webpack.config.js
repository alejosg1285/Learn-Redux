var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
                /*query: {
                    presets: ['react', 'es2015', 'stage-1']
                }*/
            }
        ]
        /*rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]*/
    }
};