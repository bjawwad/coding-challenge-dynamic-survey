const merge = require('webpack-merge');

// Plugins
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
    return merge([
        {
            optimization: {
                // runtimeChunk: 'single',
                // splitChunks: {
                //     cacheGroups: {
                //         vendor: {
                //             test: /[\\/]node_modules[\\/]/,
                //             name: 'vendors',
                //             chunk: 'all'
                //         }
                //     }
                // },
                minimizer: [new UglifyJsPlugin()]
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin(),
                new Visualizer({ filename: '.statistics.html' })
            ]
        }
    ])
}

module.exports = env => {
    return merge(baseConfig(env), prodConfiguration(env));
}