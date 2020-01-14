const path = require('path');
const devServerConfig = {
    contentBase: path.resolve(__dirname, "../dist"),
    host: "localhost",
    port: 8221,
    open: true,
    proxy: {
        '/api': {
            target: "http://127.0.0.1:3000",
            changeOrign: true,
            pathRewrite: {
                '^/api': '/'
            }
        }
    },
}
module.exports = devServerConfig