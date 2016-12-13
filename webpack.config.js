module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "www/js/adapterplayer.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
