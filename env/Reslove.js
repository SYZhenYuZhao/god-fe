const path = require("path")
const reslovePath = (relativePath) => {
    return path.resolve(__dirname, relativePath)
}
const reslove = {
    extensions: ['.jsx', '.js', '.less', '.css', '.json'],
    alias:{
        assest: reslovePath("../assest"),
        constants: reslovePath("../src/constants"),
        utils: reslovePath("../src/utils")
    }
}

module.exports = reslove