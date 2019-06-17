const path = require("path")
const Modules = require("./Modules")
const Plugins = require("./Plugins")
const Reslove = require("./Reslove")

console.log(path.resolve(__dirname, "../dist"),'-----------------------------------------------------------------------')
const config = {
    mode:"production",
    entry: {
        app:path.resolve(__dirname, "../router/index.jsx")
    },
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: Modules,
    plugins: Plugins,
    resolve: Reslove
}
module.exports = config;