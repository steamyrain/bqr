const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPages = fs.readdirSync('./src').filter(fileName => fileName.endsWith('.html'));
module.exports = {
    mode: "development",
    entry: {
        main: ["./src/index.js"],
        login: ["./src/login.js"],
        signup: ["./src/signup.js"],
    },
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ],
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        ...htmlPages.map(page => {
            let name = page.slice(0,-5);
            if(page == "index.html"){
                name = page
            }
            return new HtmlWebpackPlugin(
                {template:`./src/${page}`,filename:name,inject:false}
            )
        }),
    ],
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname,"./dist"),
        open: true,
        host: '0.0.0.0',
    }
};
