const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var common = [
    //清理dist包
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: path.resolve(__dirname,'../build.html'),
        inject: true,
        //favicon: '../icon.ico'
    }),
]

module.exports = common