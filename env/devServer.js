const path = require('path');
const devServerConfig = {
    contentBase: path.resolve(__dirname,"../dist"),
    host: "localhost",
    port: 8221,
    open: true
}
module.exports =  devServerConfig