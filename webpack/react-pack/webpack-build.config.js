const buildConfig = (options, entry, app_name) => {
    return {
        entry: entry,
        devtool: devtool_val,
        output: {
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            path: output_dir + "/js/",
            publicPath: '/static/components/js/',
            // Needed by Cesium for multiline strings
            sourcePrefix: ''
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            }, {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                }]
            }, {
                test: /\.(png|gif|jpe?g|svg|xml|json)$/,
                use: {
                    loader: 'url-loader',
                },
            }, {
                test: /\.pug$/,
                loader: 'pug-loader'
            }]
        },
        optimization: {
            minimize: true,
        },
        plugins: [
            new CopywebpackPlugin([{from: './static/components/', to: output_dir}]),
        ],
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        mode: options.mode
    }
}
module.exports = buildConfig;