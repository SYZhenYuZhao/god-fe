const path = require("path")
const reslove = {
    extensions: ['.jsx', '.js', '.less', '.css', '.json'],
    alias:{
        assest:path.resolve(__dirname,"../assest")
    }
}

module.exports = reslove