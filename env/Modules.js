const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path")
const Modules = {
    rules: [
        {
            test: /\.jsx|js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader"
                }
            ]
        },
        {
            test: /\.css|less$/,
            exclude:/src/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "less-loader"
            ]
        },
        {
            test: /\.css|less$/,
            include: /src/,
            use: [
                MiniCssExtractPlugin.loader,

                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            context: path.resolve(__dirname, 'src'),
                            hashPrefix: 'my-custom-hash',
                        },
                    }
                },
                "less-loader"]
        }
    ]
}

module.exports = Modules