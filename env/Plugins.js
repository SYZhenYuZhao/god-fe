const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var common = [
    //清理dist包
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: path.resolve(__dirname,'../build.html'),
        inject: true,
        //favicon: '../icon.ico'
    }),
]

module.exports = common