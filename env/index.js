const path = require("path")
const Modules = require("./Modules")
const Plugins = require("./Plugins")
const Reslove = require("./Reslove")
const devServer = require("./devServer")
const env = process.env.NODE_ENV
console.log(path.resolve(__dirname, "../dist"),'-----------------------------------------------------------------------')
const config = {
    mode: env,
    entry: {
        app:path.resolve(__dirname, "../router/index.jsx"),
        vender:[
            "react"
        ]
    },
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: Modules,
    plugins: Plugins,
    resolve: Reslove,
    devServer: devServer
}
module.exports = config;