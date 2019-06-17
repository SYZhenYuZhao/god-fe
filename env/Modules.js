var Modules = {
    rules:[
        {
            test: /\.jsx|js$/,
            exclude: /node_modules/,
            use:[
                {
                    loader: "babel-loader"
                }
            ]
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ["style-loader","css-loader"]
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "less-loader"]
        }
    ]
}

module.exports = Modules