const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
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
    plugins:[new HtmlWebpackPlugin({template: './src/index.html'})],
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname,"./dist"),
        open: true,
        host: '0.0.0.0',
    }
};
