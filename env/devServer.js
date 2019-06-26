const path = require('path');
const devServerConfig = {
    contentBase: path.resolve(__dirname,"../dist"),
    host: "localhost",
    port: 3000,
    open: true
}
module.exports =  devServerConfig