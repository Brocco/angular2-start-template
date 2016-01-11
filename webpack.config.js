var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'vendor': [
            // Angular 2 Deps
            'rxjs',
            'zone.js/dist/zone',
            'reflect-metadata',
            // to ensure these modules are grouped together in one file
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        'app': [
            './src/bootstrap'
        ]
    },
    devServer: {
        contentBase: path.resolve('dist'),
        publicPath: '/js',
        port: 9000,
        inline: true,
        noInfo: true
    },
    output: {
        path: path.resolve('dist/js'),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: /src/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
    ]
};
