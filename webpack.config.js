const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const _ = require('lodash');
module.exports = {
    mode: 'development', 
    entry: {
        app: _.uniq(
            _.concat(
                './src/index.js'

            ).filter(Boolean)
        )
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceMap: false
                    }
                },
                
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html"
        }),

    ],
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        port: "8085",
        stats: {
            children: false,
            chunks: false,
            modules: false,
        }
    },

};

