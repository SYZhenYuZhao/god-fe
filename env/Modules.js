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
        }
    ]
}

module.exports = Modules