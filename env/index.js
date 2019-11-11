const path = require("path")
const Modules = require("./Modules")
const Plugins = require("./Plugins")
const Reslove = require("./Reslove")
const devServer = require("./devServer")
const env = process.env.NODE_ENV
const config = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, "../index.js"),
        vender: [
            "react"
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: Modules,
    plugins: Plugins,
    resolve: Reslove,
    devServer: devServer
}
module.exports = config;