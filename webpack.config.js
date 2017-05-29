const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/typescript/index.tsx",
    output: {
        filename: "bundle.js",
        publicPath: "/dist/",
        path: path.join(__dirname, "dist")
    },
    resolve: {
        modules: [path.resolve('src'), 'node_modules'],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        },
        {
            test: /\.tsx$/,
            use: { loader: "awesome-typescript-loader" },
            include: path.join(__dirname, 'src', 'typescript')
        }]
    },
    devServer: {
        inline: true,
        port: 8080,
        hot: true
    },
};