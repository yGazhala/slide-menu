'use strict';

module.exports = {

    entry: './scripts/page.js',

    output: {
        path: './',
        filename: 'compiledPage.js',
        library: 'page'
    },

    devtool: 'source-map',

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }]
    }
};
