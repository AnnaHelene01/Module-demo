const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { //Objekt med mode
    mode: "production", 
    entry: "./index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};