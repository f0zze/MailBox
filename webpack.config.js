module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                exclude: [
                    /node_modules/
                ],
                loader: 'ng-cache?prefix=[dir]/[dir]'
            }
        ]
    }
};

