var path = require("path")
var Modules = require("./Modules")
console.log(path.resolve(__dirname, "../dist"),'-----------------------------------------------------------------------')
var config = {
    entry: {
        app:path.resolve(__dirname, "../router/index.jsx")
    },
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: Modules
}
module.exports = config;